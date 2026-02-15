from django.db import models

from accounts.models import Profile
from .posts import Post


class Comment(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    status = models.CharField(
        max_length=15,
        choices=(('approved', 'Approved'), ('pending', 'Pending'), ('spam', 'Spam')),
        default='pending'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content
