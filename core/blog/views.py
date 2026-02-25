from django.shortcuts import render, reverse, get_object_or_404, redirect
from django.views.generic import ListView, DetailView, RedirectView, TemplateView, FormView
from django.views.decorators.http import require_POST
from django.http.response import JsonResponse
from django.db.models import Count, Q
from django.db import IntegrityError

from .models import Post, Category
from .forms import NewsletterForm, ContactForm, CommentForm
from accounts.models import Profile


# Create your views here.
class IndexView(ListView):
    template_name = 'blog/index.html'
    context_object_name = 'posts'
    paginate_by = 4

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
        if self.request.user.is_authenticated:
            context['blog_user'] = Profile.objects.get(user=self.request.user)
        return context


class PostDetailView(DetailView):
    model = Post
    template_name = 'blog/post.html'
    context_object_name = 'post'

    def get_queryset(self):
        return super().get_queryset().filter(status='published')

    def get_object(self, queryset=None):
        obj = super().get_object(queryset=queryset)
        # Increment view count
        obj.view_count += + 1
        obj.save(update_fields=['view_count'])
        return obj

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.annotate(posts_count=Count('post'))
        if self.request.user.is_authenticated:
            context['blog_user'] = Profile.objects.get(user=self.request.user)
        return context


class RedirectToRealURLView(RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        post = get_object_or_404(Post, short_code=self.kwargs['short_code'])
        return reverse('post-detail', kwargs={'slug': post.slug})


class AboutView(TemplateView):
    template_name = 'blog/about.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['blog_writer'] = Profile.objects.filter(is_main_writer=True).first()
        context['categories'] = Category.objects.annotate(posts_count=Count('post'))
        if self.request.user.is_authenticated:
            context['blog_user'] = Profile.objects.get(user=self.request.user)
        return context


class ContactView(FormView):
    template_name = 'blog/contact.html'
    form_class = ContactForm
    context_object_name = 'form'

    def get_success_url(self):
        return reverse('contact')

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.annotate(posts_count=Count('post'))
        if self.request.user.is_authenticated:
            context['blog_user'] = Profile.objects.get(user=self.request.user)
        return context
