"""slm_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers

from dashboard.views import DashboardDetails
from organizations.views import OrganizationViewSet
from users.views import UserViewSet, ObtainAuthToken

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'organizations', OrganizationViewSet)


urlpatterns = [
    url(r'^api/obtain-auth-token/$', ObtainAuthToken.as_view()),
    url(r'^api/dashboard/$', DashboardDetails.as_view()),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls))
]
