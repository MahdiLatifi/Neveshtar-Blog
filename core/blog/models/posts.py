from django.db import models
from accounts.models import Profile


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    estimated_reading_time = models.IntegerField()
    view_count = models.IntegerField()
    shortened_url_code = models.CharField(max_length=255)
    # comments
    # tags

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
