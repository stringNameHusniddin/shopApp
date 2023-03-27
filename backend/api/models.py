from django.db import models

# Create your models here.
class Item(models.Model):
    added_user = models.CharField(max_length=200, null=True)
    title = models.CharField(max_length=200)
    body = models.TextField()
    image = models.ImageField(upload_to='images/')
    cost = models.IntegerField()
    time = models.DateTimeField(auto_now_add=True, null=True)
    