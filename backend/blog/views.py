from django.conf import settings
from rest_framework.viewsets import ModelViewSet

from blog.models import BlogPost, BlogComment
from blog.serializers import BlogPostSerializer, BlogCommentSerializer

print settings.INSTALLED_APPS


class BlogPostViewSet(ModelViewSet):
    serializer_class = BlogPostSerializer
    model = BlogPost
    queryset = BlogPost.objects.all()

    def get(self, request, *args, **kwargs):
        resp = super(BlogPostViewSet, self).get(request);



class BlogCommentViewSet(ModelViewSet):
    serializer_class = BlogCommentSerializer
    model = BlogComment
    queryset = BlogComment.objects.all()

