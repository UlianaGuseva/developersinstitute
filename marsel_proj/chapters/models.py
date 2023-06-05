from django.db import models

# Create your models here.

class Tasks(models.Model):
    image = models.CharField()
    name = models.CharField()
    age = models.CharField()
    theme = models.CharField()
    
class Animals13(models.Model):
    image = models.CharField()
    name = models.CharField(null=True, blank=True)
    age = models.CharField()
    theme = models.CharField()
    
    
class Colors13(models.Model):
    image = models.CharField()
    name = models.CharField(null=True, blank=True)
    age = models.CharField()
    theme = models.CharField()
    

    
