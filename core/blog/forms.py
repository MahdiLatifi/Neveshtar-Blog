from django import forms

from .models import Newsletter
from .models import Contact


class NewsletterForm(forms.ModelForm):
    class Meta:
        model = Newsletter
        fields = ('email',)


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'subject', 'message')
