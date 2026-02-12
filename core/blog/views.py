from django.shortcuts import render
from django.views.generic import ListView

from .models import Post


# Create your views here.
class IndexView(ListView):
    template_name = 'blog/index.html'
    queryset = Post.objects.filter(status='published')
    context_object_name = 'posts'
