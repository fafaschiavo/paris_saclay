from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login-member-google/', views.login_member_google, name='login_member_google'),
    url(r'^get-available-events/', views.get_available_events, name='get_available_events'),
    url(r'^update-like-status/', views.update_like_status, name='update_like_status'),
    url(r'^import-default-events/', views.import_default_events, name='import_default_events'), #To add default events
]