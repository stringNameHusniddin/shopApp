from django.contrib.auth.models import User
from .models import Item
from .serializers import ItemSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

# Create your views here.

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    authentication_classes = (TokenAuthentication,)