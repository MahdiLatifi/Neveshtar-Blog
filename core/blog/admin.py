from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin

from .models import Post, Category, Tag, Newsletter, Contact, Comment


# Register your models here.
@admin.action(description="Mark selected as featured")
def mark_selected_featured(modeladmin, request, queryset):
    queryset.update(is_featured=True)


@admin.action(description="Mark selected as Not featured")
def mark_selected_not_featured(modeladmin, request, queryset):
    queryset.update(is_featured=False)


@admin.action(description="Mark selected as published")
def mark_selected_published(modeladmin, request, queryset):
    queryset.update(status='published')


@admin.action(description="Mark selected as Not unpublished")
def mark_selected_unpublished(modeladmin, request, queryset):
    queryset.update(status='draft')


@admin.register(Post)
class PostAdmin(SummernoteModelAdmin):
    list_display = ('title', 'user', 'estimated_reading_time', 'short_code', 'view_count', 'is_featured', 'status')
    summernote_fields = ('content',)
    actions = [mark_selected_featured, mark_selected_not_featured, mark_selected_published, mark_selected_unpublished]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)


@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('email',)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'message')


@admin.action(description="Mark selected as approved")
def mark_selected_approved(modeladmin, request, queryset):
    queryset.update(status='approved')


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'content', 'status')
    actions = [mark_selected_approved]
