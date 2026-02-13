from django.shortcuts import render
from django.views.generic import ListView
from django.db.models import Count, Q

from .models import Post, Category


# Create your views here.
class IndexView(ListView):
    template_name = 'blog/index.html'
    context_object_name = 'posts'
    paginate_by = 1

    def get_queryset(self):
        queryset = Post.objects.filter(status='published').order_by('-published_at')

        search_query = self.request.GET.get('search')
        if search_query:
            queryset = queryset.filter(
                Q(title__icontains=search_query) |
                Q(content__icontains=search_query)
            )

        category_query = self.request.GET.get('cat')
        if category_query:
            queryset = queryset.filter(
                category__name=category_query
            )

        tag_query = self.request.GET.get('tag')
        if tag_query:
            queryset = queryset.filter(
                tags__name=tag_query
            )

        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['search_query'] = self.request.GET.get('search', '')
        context['category_query'] = self.request.GET.get('cat', '')
        context['tag_query'] = self.request.GET.get('tag', '')
        context['categories'] = Category.objects.annotate(posts_count=Count('post'))
        return context
