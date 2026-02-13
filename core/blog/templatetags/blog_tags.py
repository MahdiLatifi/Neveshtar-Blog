from django import template
from django.db.models import Count

from ..models import Category, Post, Tag
from accounts.models import Profile

register = template.Library()


@register.filter(name='persian_int')
def persian_int(english_int):
    devanagari_nums = ('۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹')
    number = str(english_int)
    return ''.join(devanagari_nums[int(digit)] for digit in number)


@register.inclusion_tag('blog/categories.html')
def blog_categories(categories):
    return {'categories': categories}


@register.inclusion_tag('blog/latest_posts.html')
def latest_posts():
    latest_posts = Post.objects.filter(status='published').order_by('-published_at')[:3]
    return {'latest_posts': latest_posts}



@register.inclusion_tag('blog/featured_posts.html')
def featured_posts():
    featured_posts = Post.objects.filter(status='published', is_featured=True)[:2]
    return {'featured_posts': featured_posts}


@register.inclusion_tag('blog/blog_tags.html')
def tags():
    tags = Tag.objects.all()
    return {'tags': tags}

@register.inclusion_tag('blog/blog_writer.html')
def blog_writer():
    blog_writer = Profile.objects.filter(is_main_writer=True).first()
    return {'blog_writer': blog_writer}
