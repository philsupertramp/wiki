from django.db import models
from django.utils import timezone

# Create your models here.


class Tag(models.Model):
    name = models.CharField(max_length=50)
    group = models.CharField(max_length=100)
    
    class Meta:
        ordering=['name',]
    
    
    

    def delete(self,*args, **kwargs):
        super(Tag, self).delete(*args, **kwargs)

    def __str__(self):
        return self.name

class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=255)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    tags = models.ForeignKey(Tag)

    def publish(self):
        self.published_date=timezone.now()
        self.save()
        

    def delete(self,*args, **kwargs):
        super(Post, self).delete(*args, **kwargs)

    def __str__(self):
        return self.title

