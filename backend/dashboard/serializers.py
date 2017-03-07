from rest_framework import serializers

from groups.serializers import GroupsListSerializer
from licenses.serializers import LicensesListSerializer
from users.serializers import UsersListSerializer


class DashboardSerializer(serializers.Serializer):
    users = UsersListSerializer(many=True)
    groups = GroupsListSerializer(many=True)
    licenses = LicensesListSerializer(many=True)
    # account = ''
