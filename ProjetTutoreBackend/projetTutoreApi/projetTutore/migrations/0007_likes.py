# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-02 20:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projetTutore', '0006_auto_20180402_2025'),
    ]

    operations = [
        migrations.CreateModel(
            name='likes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member_id', models.IntegerField(default=1)),
                ('event_id', models.IntegerField(default=1)),
                ('is_active', models.IntegerField(default=1)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
