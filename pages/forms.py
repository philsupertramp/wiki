from django import forms
from django.utils import timezone
from django.utils.text import slugify
from markdownx.fields import MarkdownxFormField
from markdownx.widgets import MarkdownxWidget

from pages.models import Page


class EditMarkdownxWidget(MarkdownxWidget):
    template_name = 'markdownx/edit-widget.html'


class PageForm(forms.ModelForm):
    content = MarkdownxFormField(widget=EditMarkdownxWidget)
    user = None

    class Meta:
        model = Page
        fields = ('title', 'slug', 'text', 'content', 'description', 'is_published')

    def save(self, commit=True):
        if self.instance.pk:
            self.instance.editor = self.user
            self.instance.edited_at = timezone.now()
        else:
            self.instance.author = self.user

        self.instance.text = self.instance.content
        instance = super().save(commit)
        return instance

    def clean_slug(self):
        cleaned_data = self.cleaned_data
        slug = cleaned_data.get('slug')
        if not slug:
            slug = slugify(cleaned_data.get('title'))
            if Page.objects.filter(slug=slug).exists():
                raise forms.ValidationError("Slug is not unique.")
        else:
            slug = slugify(slug)

        return slug
