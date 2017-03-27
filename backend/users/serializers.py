from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator

from accounts.models import Account

from .models import User


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'email')
        write_only_fields = ('password',)

    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])

    def create(self, validated_data):
        user = super(CreateUserSerializer, self).create(validated_data)

        # request_user = self.context['request'].user
        # if request_user.is_anonymous:
        #     user.account = Account.objects.create(name='')
        # else:
        #     user.account = request_user.account

        user.set_password(validated_data['password'])
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
        fields = ('id', 'email')
