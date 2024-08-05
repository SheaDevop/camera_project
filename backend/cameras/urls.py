
from django.urls import path
from .views import CameraListView

urlpatterns = [
    path('api/cameras/', CameraListView.as_view(), name='camera-list'),
]
