from rest_framework.viewsets import ModelViewSet
from license.models import Organization
from license.serializers import OrganizationSerializer


class OrganizationViewSet(ModelViewSet):

    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
