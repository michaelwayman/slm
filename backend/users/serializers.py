from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from organizations.models import Organization

from .models import User


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'email')
        write_only_fields = ('password',)

    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])

    def create(self, validated_data):
        user = super(RegisterUserSerializer, self).create(validated_data)

        request_user = self.context['request'].user
        if request_user.is_anonymous:
            user.organization = Organization.objects.create(name='')
        else:
            user.organization = request_user.organization

        user.set_password(validated_data['password'])

        user.save()
        return user

    def validate(self, attrs):
        data = super(RegisterUserSerializer, self).validate(attrs)
        data['username'] = data['email']
        return data


class UserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email')


class UsersListSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email')
