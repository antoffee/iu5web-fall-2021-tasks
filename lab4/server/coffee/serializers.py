from django.db import models
from .models import Coffee, Cafe
from rest_framework.serializers import ModelSerializer


class CafeSerializer(ModelSerializer):
    class Meta:
        model = Cafe
        fields = ["pk", "name", "address"]


class CoffeeSerializer(ModelSerializer):
    class Meta:
        model = Coffee
        fields = ["pk", "name", "price", "description",
                  "main_image", "cafe", "score", "country"]
