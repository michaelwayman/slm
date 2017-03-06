from rest_framework import serializers

from organizations.models import Organization


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('user_set', 'name', 'pk', 'license_set', 'group_set')

        depth = 1
