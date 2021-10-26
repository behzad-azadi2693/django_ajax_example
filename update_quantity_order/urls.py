from django.urls import path
from .view import index, change_qty


urlpatterns = [
    path('', index, name="index"),
    path('change/quantity/', change_qty, name="change_qty"),
]