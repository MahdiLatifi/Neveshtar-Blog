from django.urls import path, include
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]
