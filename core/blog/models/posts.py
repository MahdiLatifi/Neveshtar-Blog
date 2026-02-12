from django.db import models
from django.utils.crypto import get_random_string

from accounts.models import Profile
# from .categories import Category


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(default='images/post-1.jpg', upload_to='blog/')
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    estimated_reading_time = models.IntegerField()
    view_count = models.IntegerField(default=0)
    short_code = models.CharField(max_length=20, unique=True, blank=True)
    published_at = models.DateTimeField()
    status = models.CharField(max_length=100, choices=(('draft', 'Draft'), ('published', 'Published')), default='draft')
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    # comments
    tags = models.ManyToManyField('Tag')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    @property
    def snippet_content(self):
        return self.content[:25] + '...' if len(self.content) > 25 else self.content

    def get_unique_code(self, length):
        code = get_random_string(length=length)
        if not Post.objects.filter(short_code=code).exists():
            return code
        return self.get_unique_code(length)

    def save(self, *args, **kwargs):
        if not self.short_code:
            self.short_code = self.get_unique_code(15)
        return super().save(*args, **kwargs)
