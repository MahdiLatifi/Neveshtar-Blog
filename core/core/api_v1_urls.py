from django.urls import path, include

app_name = 'api-v1'

urlpatterns = [
    path('', include('blog.api.v1.urls')),
    path('auth/', include('accounts.api.v1.urls')),
]
