# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-02 20:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projetTutore', '0005_event'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='event',
            new_name='events',
        ),
    ]
