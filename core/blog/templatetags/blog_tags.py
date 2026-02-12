from django import template
from django.db.models import Count

from ..models import Category

register = template.Library()


@register.filter(name='persian_int')
def persian_int(english_int):
    devanagari_nums = ('۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹')
    number = str(english_int)
    return ''.join(devanagari_nums[int(digit)] for digit in number)


@register.inclusion_tag('blog/categories.html')
def blog_categories():
    categories = Category.objects.annotate(posts_count=Count('post'))
    return {'categories': categories}
