from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import DashboardSerializer
from groups.models import Group
from licenses.models import License
from users.models import User

class DashboardDetails(APIView):

    def get(self, request, format=None):

        organization = request.user.organization

        serializer = DashboardSerializer({
            'users': User.objects.filter(organization=organization),
            'groups': Group.objects.filter(organization=organization),
            'licenses': License.objects.filter(organization=organization)
        })
        return Response(serializer.data)
