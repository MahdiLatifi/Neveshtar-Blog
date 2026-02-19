from rest_framework import serializers
from django.shortcuts import get_object_or_404

from ...models import Newsletter, Comment, Post
from accounts.models import Profile


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = ('email',)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('user', 'post', 'content')
        read_only_fields = ('user', 'post')

    def validate(self, data):
        post_pk = self.context.get('view').kwargs.get('pk')
        user = self.context['request'].user
        data['user'] = get_object_or_404(Profile, user=user)
        data['post'] = get_object_or_404(Post, id=post_pk)
        return super().validate(data)
