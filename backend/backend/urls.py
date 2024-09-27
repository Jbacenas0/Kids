from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import AppointmentViewSet, PatientViewSet, AvailabilityViewSet, ConsultationViewSet

# Create a router and register the viewsets
router = DefaultRouter()
router.register(r'appointments', AppointmentViewSet, basename='appointment')
router.register(r'patients', PatientViewSet, basename='patient')
router.register(r'availability', AvailabilityViewSet, basename='availability')  # Register Availability API
router.register(r'consultations', ConsultationViewSet, basename='consultation')  # Register Consultation API

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),  # Include API URLs
]
