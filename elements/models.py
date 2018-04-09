from django.db import models
from django.utils import timezone
from markdownx.models import MarkdownxField


class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=255)
    text = models.TextField(blank=True)
    content = MarkdownxField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    tags = models.CharField(max_length=55)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def delete(self, *args, **kwargs):
        super(Post, self).delete(*args, **kwargs)

    def __unicode__(self):
        return '%s' % self.title

    def __str__(self):
        return self.title


class Tag(models.Model):
    name = models.CharField(max_length=55)
    group = models.ManyToManyField('Tag')
    