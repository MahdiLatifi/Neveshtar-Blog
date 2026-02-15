from django import forms

from .models import Newsletter, Contact, Comment


class NewsletterForm(forms.ModelForm):
    class Meta:
        model = Newsletter
        fields = ('email',)


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'subject', 'message')


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('content',)
