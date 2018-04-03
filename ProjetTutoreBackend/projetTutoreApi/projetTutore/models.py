# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class members(models.Model):
	member_name = models.CharField(max_length=200, default='')
	email = models.CharField(max_length=200, default='')
	hash_id = models.CharField(max_length=200, default='')
	google_id = models.CharField(max_length=200, default='')
	first_name = models.CharField(max_length=200, default='')
	last_name = models.CharField(max_length=200, default='')
	photo_url = models.CharField(max_length=400, default='')
	serverAuthCode = models.TextField(default='')
	refreshToken = models.TextField(default='')
	idToken = models.TextField(default='')
	accessToken = models.TextField(default='')
	is_visitor = models.IntegerField(default=1)

class events(models.Model):
	event_title = models.CharField(max_length=200, default='')
	short_description = models.TextField(default='')
	long_description = models.TextField(default='')
	date = models.DateTimeField()
	location = models.CharField(max_length=200, default='')
	address = models.CharField(max_length=200, default='')
	latitude = models.DecimalField(max_digits=9, decimal_places=7)
	longitude = models.DecimalField(max_digits=9, decimal_places=7)
	facebook_event_link = models.CharField(max_length=200, default='')
	website = models.CharField(max_length=200, default='')
	featured_image = models.CharField(max_length=200, default='')
	created_at = models.DateTimeField(auto_now=False, auto_now_add=True)

class likes(models.Model):
	member_id = models.IntegerField(default=1)
	event_id = models.IntegerField(default=1)
	is_active = models.IntegerField(default=1)
	updated_at = models.DateTimeField(auto_now=True)