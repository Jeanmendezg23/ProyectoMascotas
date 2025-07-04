from django.urls import path, include
from rest_framework import routers
from .views import MascotaViewSet

router = routers.DefaultRouter()
router.register(r'mascotas', MascotaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
