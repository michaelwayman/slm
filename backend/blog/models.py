from __future__ import unicode_literals
from django.db import models
from django.utils import timezone


class BlogPost(models.Model):
    class Meta:
        ordering = ['-posted_date']

    title = models.CharField(max_length=200)
    author = models.CharField(max_length=30)     # TODO: Switch this out for a user model eventually
    content = models.TextField()
    posted_date = models.DateTimeField(default=timezone.now)


class BlogComment(models.Model):
    class Meta:
        ordering = ['-posted_date']

    content = models.TextField()
    author = models.CharField(max_length=30)     # TODO: Switch this out for a user model eventually
    posted_date = models.DateTimeField(default=timezone.now)
    post = models.ForeignKey('BlogPost')
