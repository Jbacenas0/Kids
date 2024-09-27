from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField(null=True, blank=True)  # Allow null values
    contact_number = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    date_created = models.DateField(auto_now_add=True)

class Appointment(models.Model):
    app_id = models.AutoField(primary_key=True,)
    patient_name = models.CharField(max_length=100, default='')
    date = models.DateField()
    time = models.TimeField()
    description = models.TextField()

class Availability(models.Model):
    date = models.DateField()
    time = models.TimeField()
    is_available = models.BooleanField(default=True)

class Consultation(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    date = models.DateField()
    time = models.TimeField()
