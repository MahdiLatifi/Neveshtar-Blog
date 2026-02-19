import re

import jdatetime
from django import template
from django.db.models import Count
from django.shortcuts import reverse

from accounts.models import Profile
from ..models import Category, Post, Tag

register = template.Library()

# ------------------------------------------------------------
#  Persian digit conversion (shared helper)
# ------------------------------------------------------------
PERSIAN_DIGITS = {
    '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
    '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹',
}


def to_persian_digits(text):
    """Replace all ASCII digits in a string with Persian (Eastern Arabic) digits."""
    return re.sub(r'\d', lambda m: PERSIAN_DIGITS[m.group()], text)


# ------------------------------------------------------------
#  Filters
# ------------------------------------------------------------
@register.filter(name='persian_int')
def persian_int(english_int):
    """
    Convert an integer (or its string representation) to a string with Persian digits.
    Example: 12345 -> '۱۲۳۴۵'
    """
    return to_persian_digits(str(english_int))


@register.filter
def my_jalalidate(value):
    """
    Convert a Gregorian date/datetime to a Jalali (Persian) date string.
    Output format: "day month year" with Persian month names and Persian digits.
    Example: 2025-02-20 -> '۱ اسفند ۱۴۰۳'
    """
    if not value:
        return ''

    # If value is a datetime, extract its date part
    if hasattr(value, 'date'):
        value = value.date()

    try:
        jalali_date = jdatetime.date.fromgregorian(date=value)
    except (TypeError, ValueError, AttributeError):
        # Return the original value if conversion fails
        return value

    # Month name mapping (English → Persian)
    # jdatetime's strftime('%B') normally returns Persian names when the locale is 'fa',
    # but we provide a manual mapping to be safe.
    month_names = {
        'Farvardin': 'فروردین',
        'Ordibehesht': 'اردیبهشت',
        'Khordad': 'خرداد',
        'Tir': 'تیر',
        'Mordad': 'مرداد',
        'Shahrivar': 'شهریور',
        'Mehr': 'مهر',
        'Aban': 'آبان',
        'Azar': 'آذر',
        'Dey': 'دی',
        'Bahman': 'بهمن',
        'Esfand': 'اسفند',
    }

    month_en = jalali_date.strftime("%B")  # e.g. 'Esfand'
    month_fa = month_names.get(month_en, month_en)  # fallback to English if not found

    # Format: day month year
    formatted = jalali_date.strftime(f"%d {month_fa} %Y")
    return to_persian_digits(formatted)


# ------------------------------------------------------------
#  Simple inclusion tags
# ------------------------------------------------------------
@register.inclusion_tag('blog/includes/categories.html')
def blog_categories(categories):
    """Render a list of categories."""
    return {'categories': categories}


@register.inclusion_tag('blog/includes/latest_posts.html')
def latest_posts():
    """Show the three most recent published posts."""
    latest_posts = Post.objects.filter(status='published').order_by('-published_at')[:3]
    return {'latest_posts': latest_posts}


@register.inclusion_tag('blog/includes/featured_posts.html')
def featured_posts():
    """Show up to two featured published posts."""
    featured_posts = Post.objects.filter(status='published', is_featured=True)[:2]
    return {'featured_posts': featured_posts}


@register.inclusion_tag('blog/includes/blog_tags.html')
def tags():
    """Render all tags (consider adding a count annotation if needed)."""
    all_tags = Tag.objects.all()
    return {'tags': all_tags}


@register.inclusion_tag('blog/includes/blog_writer.html')
def blog_writer():
    """Show the main writer (profile with is_main_writer=True)."""
    writer = Profile.objects.filter(is_main_writer=True).first()
    return {'blog_writer': writer}


# ------------------------------------------------------------
#  Utility tag for absolute URLs
# ------------------------------------------------------------
@register.simple_tag(takes_context=True)
def absolute_url(context, view_name, *args, **kwargs):
    """
    Build an absolute URL for a given view name and its arguments.
    Usage: {% absolute_url 'post_detail' post.id %}
    """
    request = context['request']
    relative_path = reverse(view_name, args=args, kwargs=kwargs)
    return request.build_absolute_uri(relative_path)
