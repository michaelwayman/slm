from __future__ import unicode_literals

from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return str(self.name)
