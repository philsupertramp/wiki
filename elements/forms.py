from django import forms
from .models import Post, Tag
from mdeditor.fields import MDTextFormField


class PostForm(forms.ModelForm):
    content = MDTextFormField()

    class Meta:
        model = Post
        fields = ('title', 'text', 'tags', 'content')


class TagForm(forms.ModelForm):
    class Meta:
        model = Tag
        fields = ('name', 'group',)
