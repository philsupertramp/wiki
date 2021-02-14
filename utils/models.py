from django.db import models


class CreatedAtEditedAtModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        abstract = True
