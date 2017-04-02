from __future__ import unicode_literals

from django.db import models


class Account(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return str(self.name)
