from django import forms
from .models import Post, Tag
from django_summernote.widgets import SummernoteWidget, SummernoteInplaceWidget

class PostForm(forms.ModelForm):

	class Meta:
		model = Post
		fields = ('title', 'text','tags',)
		widgets = {
			'text': SummernoteInplaceWidget(),
			'tag': SummernoteWidget(),
		}
