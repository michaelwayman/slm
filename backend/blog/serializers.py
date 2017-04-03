from rest_framework import serializers

from .models import BlogComment, BlogPost


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = '__all__'


class BlogCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogComment
        fields = '__all__'
