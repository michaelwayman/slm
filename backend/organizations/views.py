from rest_framework.viewsets import ModelViewSet

from organizations.models import Organization

from .serializers import OrganizationSerializer


class OrganizationViewSet(ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    model = Organization
