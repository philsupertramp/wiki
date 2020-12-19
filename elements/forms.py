from django import forms
from .models import Post, Tag
from markdownx.fields import MarkdownxFormField


class PostForm(forms.ModelForm):
    content = MarkdownxFormField()

    class Meta:
        model = Post
        fields = ('title', 'text', 'tags', 'content')


class TagForm(forms.ModelForm):
    class Meta:
        model = Tag
        fields = ('name', 'group',)
