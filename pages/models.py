import json
from django.contrib.auth import get_user_model
from django.db import models
from django.db.models import UniqueConstraint, Q
from django.urls import reverse

from django.utils.text import slugify
from mdeditor.fields import MDTextField

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

    content = MDTextField()
    description = models.CharField('HTML meta:description attribute', default='', max_length=100, null=True)

    class Meta:
        constraints = [
            UniqueConstraint(
                fields=['slug'], condition=Q(is_published=True), name='unique_published_slug_constraint'
            )
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._values = self.to_dict()

    def save(self, *args, **kwargs):
        if self.title and not self.slug:
            self.slug = slugify(self.title)

        updated_fields = {}
        for key in self._values.keys():
            if self._values[key] != getattr(self, key):
                updated_fields[key] = [self._values[key], getattr(self, key)]

        if updated_fields and self.pk:
            kwargs.update({'update_fields': updated_fields.keys()})
            PageHistory.objects.create(
                changed_fields=json.dumps(updated_fields),
                initiator_id=self.editor_id or self.author_id,
                page=self,
                page_state=self._values
            )
        super().save(*args, **kwargs)

    def to_dict(self):
        return {
            'text': self.text,
            'content': self.content,
            'title': self.title,
            'slug': self.slug,
            'is_published': self.is_published,
            'editor_id': self.editor_id,
            'description': self.description
        }

    def __str__(self):
        return f'Page: {self.title}'

    def get_absolute_url(self):
        return reverse('page_detail', args=[self.slug])

    @property
    def preview(self):
        return self.content[:250]

    @property
    def read_estimate(self):
        # do some magic
        return ''


class PageHistory(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    page = models.ForeignKey(Page, on_delete=models.CASCADE)
    changed_fields = models.JSONField()
    page_state = models.JSONField(null=True)
    initiator = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    @property
    def field_names(self):
        if isinstance(json.loads(self.changed_fields), dict):
            return json.loads(self.changed_fields).keys()

    @property
    def fields(self):
        return json.loads(self.changed_fields)

    @property
    def state(self):
        return self.page_state
