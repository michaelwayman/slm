from rest_framework.viewsets import ModelViewSet

from .models import Contact
from .serializers import ContactSerializer


class ContactViewSet(ModelViewSet):
    serializer_class = ContactSerializer
    model = Contact
    http_method_names = ('post',)
    queryset = Contact.objects.all()
