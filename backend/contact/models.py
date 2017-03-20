from __future__ import unicode_literals

from django.db import models

from users.models import User


class Contact(models.Model):
    name = models.CharField(max_length=128)
    email = models.EmailField()
    subject = models.CharField(max_length=256)
    message = models.TextField()

    read = models.BooleanField(default=False)
    read_date = models.DateTimeField(blank=True, null=True)
    sent_date = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(User, blank=True, null=True)
