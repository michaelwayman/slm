from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator

from accounts.models import Account
from .models import User


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'username', 'first_name', 'last_name', 'email', 'id', 'account')
        extra_kwargs = {
            'password': {'write_only': True},
            'username': {'required': False}
        }

    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])
    account = serializers.PrimaryKeyRelatedField(read_only=True, required=False)

    def create(self, validated_data):
        user = super(CreateUserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.account = Account.objects.create(name='')
        user.save()
        Token.objects.create(user=user)
        return user

    def validate(self, attrs):
        data = super(CreateUserSerializer, self).validate(attrs)
        data['username'] = data['email']
        return data


class UserDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'first_name', 'last_name', 'account')

    account = serializers.PrimaryKeyRelatedField(read_only=True, required=False)
