from django.db import models
from django.utils import timezone
from mdeditor.fields import MDTextField


class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=255)
    text = models.TextField(blank=True)
    content = MDTextField()
    created_date = models.DateTimeField(default=timezone.now)
    edit_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    tags = models.ManyToManyField('Tag', related_name='posts')

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


class TagGroup(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f'Tag group: {self.name}'


class Tag(models.Model):
    name = models.CharField(max_length=55)
    group = models.ForeignKey('TagGroup', related_name='tags', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'{self.group.name + ": " if self.group else ""}{self.name}'
