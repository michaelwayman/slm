from __future__ import unicode_literals

from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=56)
    users = models.ManyToManyField('users.User')
    organization = models.ForeignKey('organizations.Organization')
