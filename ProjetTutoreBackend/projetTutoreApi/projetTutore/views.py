# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from projetTutore.models import *
import json
import string
import random
import pandas as pd
import os
import datetime
from dateutil import parser




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

def import_default_events(request):
	file_name = 'default_input.xlsx'
	THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
	my_file = os.path.join(THIS_FOLDER, file_name)
	dfs = pd.read_excel(my_file, sheet_name=None)

	# for index, row in dfs['Sheet1'].iterrows():
	for index, row in dfs.iterrows():
		event_title = row['Event Title']
		short_description = row['Short Description']
		long_description = row['Long Description']
		date = row['Date']
		hour = row['Hour']
		location = row['Location']
		address = row['Address']
		latitude = row['Latitude']
		longitude = row['Longitude']
		facebook_event_link = row['Facebook Event Link']
		website = row['Website']
		featured_image = row['Featured image']


		new_date = str(date).split(' ')[0] + ' ' + str(hour)
		new_date = parser.parse(new_date)

		event_objects = events.objects.filter(event_title = event_title)
		if len(event_objects) > 0:
			pass
		else:
			new_object = events(
				event_title = event_title,
				short_description = short_description,
				long_description = long_description,
				date = new_date,
				location = location,
				address = address,
				latitude = float(latitude),
				longitude = float(longitude),
				facebook_event_link = facebook_event_link,
				website = website,
				featured_image = featured_image,
			)
			new_object.save()

	return HttpResponse(200)

@csrf_exempt
def get_available_events(request):
	data_json = request.body.decode('utf-8')
	data = json.loads(data_json)
	member_hash_id = data['member_hash_id']
	member_object = members.objects.get(hash_id = member_hash_id)

	available_events = events.objects.all().order_by('date')

	available_events_array = []
	for event in available_events:
		new_event = {}
		new_event['key'] = event.id
		new_event['event_title'] = event.event_title
		new_event['short_description'] = event.short_description
		new_event['long_description'] = event.long_description
		new_event['date'] = event.date.strftime("%d/%m/%Y %H:%M")
		new_event['location'] = event.location
		new_event['address'] = event.address
		new_event['latitude'] = event.latitude
		new_event['longitude'] = event.longitude
		new_event['facebook_event_link'] = event.facebook_event_link
		new_event['website'] = event.website
		new_event['featured_image'] = event.featured_image

		likes_object = likes.objects.filter(member_id = member_object.id).filter(event_id = event.id)
		if len(likes_object) > 0:
			new_event['is_liked'] = likes_object[0].is_active
		else:
			new_event['is_liked'] = 0

		available_events_array.append(new_event)

	available_events_array = list(reversed(available_events_array))

	return JsonResponse(available_events_array, safe = False)

@csrf_exempt
def update_like_status(request):
	data_json = request.body.decode('utf-8')
	data = json.loads(data_json)
	event_id = data['event_id']
	status = data['status']
	member_hash_id = data['member_hash_id']
	member_object = members.objects.get(hash_id = member_hash_id)

	likes_object = likes.objects.filter(member_id = member_object.id).filter(event_id = event_id)
	if len(likes_object) > 0:
		like_object = likes_object[0]
	else:
		like_object = likes(member_id = member_object.id, event_id = event_id)

	like_object.is_active = int(status)
	like_object.save()

	return HttpResponse(200)







