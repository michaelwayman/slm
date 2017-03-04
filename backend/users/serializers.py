from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email', 'pk')
        write_only_fields = ('password',)
        read_only_fields = ('is_staff', 'is_superuser', 'is_active', 'date_joined',)

    # def create(self, validated_data):
    #     user = super(UserSerializer, self).create(validated_data)
    #     user.set_password(validated_data['password'])
    #     return user
