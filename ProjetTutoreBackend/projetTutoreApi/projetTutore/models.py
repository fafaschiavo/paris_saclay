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