from __future__ import unicode_literals

from django.db import models


class Solution(models.Model):
    name = models.CharField(max_length=128)
    short = models.CharField(max_length=512)
    category = models.ForeignKey('Category')
    description = models.TextField()


class Category(models.Model):
    name = models.CharField(max_length=56)
