from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import UniqueConstraint, Q
from django.urls import reverse

from django.utils.text import slugify
from markdownx.models import MarkdownxField

from utils.models import CreatedAtEditedAtModel


class Page(CreatedAtEditedAtModel):
    title = models.CharField(max_length=255)
    is_published = models.BooleanField(default=True)
    slug = models.SlugField(blank=True, null=True)  # even though we allow None save will set the slug regardless.
    text = models.TextField(blank=True)
    author = models.ForeignKey(
        get_user_model(),
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='created_pages'
    )
    editor = models.ForeignKey(
        get_user_model(),
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='edited_pages'
    )

    content = MarkdownxField()

    class Meta:
        constraints = [
            UniqueConstraint(
                fields=['slug'], condition=Q(is_published=True), name='unique_published_slug_constraint'
            )
        ]

    def save(self, *args, **kwargs):
        if self.title and not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f'Page: {self.title}'

    def get_absolute_url(self):
        return reverse('page_detail', args=[self.slug])
