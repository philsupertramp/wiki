from django.contrib import admin
from .models import Post, Tag, TagGroup
from markdownx.admin import MarkdownxModelAdmin


admin.site.register(Post, MarkdownxModelAdmin)
admin.site.register(Tag)
admin.site.register(TagGroup)
