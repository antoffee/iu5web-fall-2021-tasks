from rest_framework.viewsets import ModelViewSet
from .serializers import CoffeeSerializer, CafeSerializer
from .models import Coffee, Cafe


class CoffeeViewSet(ModelViewSet):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer


class CafeViewSet(ModelViewSet):
    queryset = Cafe.objects.all()
    serializer_class = CafeSerializer
