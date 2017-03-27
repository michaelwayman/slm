# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-27 03:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('email', models.EmailField(max_length=254)),
                ('subject', models.CharField(max_length=256)),
                ('message', models.TextField()),
                ('read', models.BooleanField(db_index=True, default=False)),
                ('read_date', models.DateTimeField(blank=True, null=True)),
                ('received_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
