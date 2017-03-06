from __future__ import unicode_literals

from django.db import models


class License(models.Model):
    organization = models.ForeignKey('organizations.Organization')
    user = models.ForeignKey('users.User', null=True)
