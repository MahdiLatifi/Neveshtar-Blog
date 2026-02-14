from django.contrib import admin
from .models import Post, Category, Tag, Newsletter


# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'estimated_reading_time', 'short_code', 'view_count', 'is_featured', 'status')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('email',)
