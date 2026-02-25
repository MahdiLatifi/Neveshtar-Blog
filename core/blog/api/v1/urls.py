from django.urls import path

from . import views

urlpatterns = [
    path('newsletter/', views.NewsletterCreateView.as_view(), name='newsletter-create'),
    path('post/<int:pk>/comment/', views.CommentCreateView.as_view(), name='comment-create'),
]
