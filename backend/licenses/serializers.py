from rest_framework import serializers

from .models import License


class LicensesListSerializer(serializers.ModelSerializer):

    class Meta:
        model = License
        fields = ('id', 'name')
