from django.urls import path, include
from django.views.generic import TemplateView
from . import views
from django.urls import path, register_converter


class UnicodeSlugConverter:
    regex = '[^/]+'  # Matches everything except forward slash

    def to_python(self, value):
        return value

    def to_url(self, value):
        return value


register_converter(UnicodeSlugConverter, 'unicode_slug')

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('about/', views.AboutView.as_view(), name='about'),
    path('contact/', views.ContactView.as_view(), name='contact'),
    path('post/<unicode_slug:slug>/', views.PostDetailView.as_view(), name='post-detail'),
    path('newsletter/subscribe/', views.newsletter_subscribe, name='newsletter-subscribe'),
    path('p/<str:short_code>/', views.RedirectToRealURLView.as_view(), name='redirect-to-real-url'),
]
