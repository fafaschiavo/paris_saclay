# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from projetTutore.models import *
import json
import string
import random






def hash_id_generator(size=32, chars=string.ascii_lowercase + string.digits):
	return ''.join(random.choice(chars) for _ in range(size))

def generate_member_hash_id():
	verify_existence = True
	while verify_existence == True:
		new_hash_id = hash_id_generator()
		try:
			member = members.objects.get(hash_id = new_hash_id)
		except:
			verify_existence = False
	return new_hash_id

def add_new_member_google(member_name, email, google_id, first_name, last_name, photo_url, serverAuthCode, refreshToken, idToken, accessToken, is_visitor = 1):
	new_hash_id = generate_member_hash_id()
	new_member_object = members( member_name = member_name, email = email, hash_id = new_hash_id, google_id = google_id, first_name = first_name, last_name = last_name, photo_url = photo_url, serverAuthCode = serverAuthCode, refreshToken = refreshToken, idToken = idToken, accessToken = accessToken)
	new_member_object.save()
	return new_member_object




# Create your views here.
def index(request):
	print 'Requested'
	return HttpResponse(200)

@csrf_exempt
def login_member_google(request):
	data_json = request.body.decode('utf-8')
	data = json.loads(data_json)

	member_object = members.objects.filter(google_id = data['user']['id'])
	if len(member_object) == 0:
		member_object = members.objects.filter(email = data['user']['email'])
		if len(member_object) == 0:
			member_object = add_new_member_google(data['user']['name'], data['user']['email'], data['user']['id'], data['user']['givenName'], data['user']['familyName'], data['user']['photoUrl'], data['serverAuthCode'], data['refreshToken'], data['idToken'], data['accessToken'], data['user']['is_visitor'])
		else:
			member_object = member_object[0]
	else:
		member_object = member_object[0]

	return JsonResponse({'member_hash':member_object.hash_id})