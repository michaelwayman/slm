from rest_framework import serializers

from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'subject', 'message')

    def create(self, validated_data):
        contact = super(ContactSerializer, self).create(validated_data)

        request_user = self.context['request'].user
        if not request_user.is_anonymous:
            contact.user = request_user

        return contact
