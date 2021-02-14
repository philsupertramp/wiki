from django import forms
from django.core.exceptions import NON_FIELD_ERRORS
from django.db import IntegrityError
from django.utils import timezone
from django.utils.text import slugify
from django_middleware_global_request.middleware import get_request
from markdownx.fields import MarkdownxFormField

from pages.models import Page


class PageForm(forms.ModelForm):
    content = MarkdownxFormField()

    class Meta:
        model = Page
        fields = ('title', 'slug', 'text', 'content')

    def save(self, commit=True):
        user = get_request().user

        if self.instance.pk:
            self.instance.editor = user
            self.instance.edited_at = timezone.now()
        else:
            self.instance.author = user

        self.instance.text = self.instance.content
        instance = super().save(commit)
        return instance

    def clean_slug(self):
        cleaned_data = self.cleaned_data
        slug = cleaned_data['slug']

        if not slug:
            slug = slugify(cleaned_data['title'])
            if Page.objects.get(slug=slug):
                raise forms.ValidationError("Slug is not unique.")

        # Always return the full collection of cleaned_data
        return cleaned_data
