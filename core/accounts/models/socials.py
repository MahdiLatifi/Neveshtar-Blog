from django.db import models
from .profiles import Profile


class Social(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField()
    url = models.URLField()
    user = models.ForeignKey(Profile, related_name='socials', on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
