from django.db.models import Count

from accounts.models import Profile
from .models import Category, Post, Tag


class GeneralContextMixin:
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.user.is_authenticated:
            context['blog_user'] = Profile.objects.get(user=self.request.user)
        context['blog_writer'] = Profile.objects.filter(is_main_writer=True).first()
        context['categories'] = Category.objects.annotate(posts_count=Count('post'))
        context['latest_posts'] = Post.objects.filter(status='published').order_by('-published_at').order_by('-published_at')[:3]
        context['tags'] = Tag.objects.all()
        return context
