from rest_framework import renderers
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.reverse import reverse

from .models import User
from .serializers import (
    RegisterUserSerializer,
    UserDetailsSerializer,
)


class ObtainAuthToken(APIView):
    renderer_classes = (renderers.JSONRenderer,)
    serializer_class = AuthTokenSerializer
    http_method_names = ('post',)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'email': user.email,
            'userDetails': reverse('user-detail', request=request, kwargs={'pk': user.pk}),
            'id': user.id,
            'organizationDetails': reverse('organization-detail', request=request, kwargs={'pk': user.organization.pk}),
        })


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    model = User

    def get_serializer_class(self):
        if self.action == 'create':
            return RegisterUserSerializer
        elif self.action == 'details':
            return UserDetailsSerializer
        else:
            pass

    def retrieve(self, request, *args, **kwargs):
        return super(UserViewSet, self).retrieve(request, *args, **kwargs)