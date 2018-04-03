# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-02 20:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projetTutore', '0004_members_is_visitor'),
    ]

    operations = [
        migrations.CreateModel(
            name='event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_title', models.CharField(default='', max_length=200)),
                ('short_description', models.TextField(default='')),
                ('long_description', models.TextField(default='')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('location', models.CharField(default='', max_length=200)),
                ('address', models.CharField(default='', max_length=200)),
                ('latitude', models.DecimalField(decimal_places=7, max_digits=9)),
                ('longitude', models.DecimalField(decimal_places=7, max_digits=9)),
                ('facebook_event_link', models.CharField(default='', max_length=200)),
                ('website', models.CharField(default='', max_length=200)),
                ('featured_image', models.CharField(default='', max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]