from django.db import models
from django.utils.crypto import get_random_string
from django.utils.text import slugify
from django.shortcuts import reverse

from accounts.models import Profile


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(default='images/post-1.jpg', upload_to='blog/')
    slug = models.SlugField(max_length=255, unique=True, blank=True, editable=False)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    estimated_reading_time = models.IntegerField()
    view_count = models.IntegerField(default=0)
    short_code = models.CharField(max_length=20, unique=True, blank=True)
    published_at = models.DateTimeField()
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    # comments
    tags = models.ManyToManyField('Tag')
    is_featured = models.BooleanField(default=False)
    status = models.CharField(max_length=100, choices=(('draft', 'Draft'), ('published', 'Published')), default='draft')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post-detail', kwargs={'slug': self.slug})

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
            self.short_code = self.get_unique_code(10)

        if not self.slug:
            self.slug = slugify(self.title, allow_unicode=True)

            # Ensure slug is unique
            original_slug = self.slug
            counter = 1
            while self.__class__.objects.filter(slug=self.slug).exists():
                self.slug = f"{original_slug}-{counter}"
                counter += 1
        return super().save(*args, **kwargs)

    def related_posts(self):
        related_posts = Post.objects.filter(category=self.category, status='published').exclude(pk=self.id)[:3]
        return related_posts

    def all_comments(self):
        return self.comments.filter(status='approved').order_by('-created_at')
