from django.contrib import admin
from .models import Patient, Appointment, Availability, Consultation

admin.site.register(Patient)
admin.site.register(Appointment)
admin.site.register(Availability)
admin.site.register(Consultation)
