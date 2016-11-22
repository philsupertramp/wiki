from django import forms
from .models import Post
from tinymce.widgets import TinyMCE

class PostForm(forms.ModelForm):
	text = forms.CharField(widget=TinyMCE(attrs={'cols': 80, 'rowns': 30}))
	class Meta:
		model = Post
		fields = ('title', 'text',)
