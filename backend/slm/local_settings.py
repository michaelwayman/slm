from .settings import *

INSTALLED_APPS += [
    'corsheaders'
]

MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware'] + MIDDLEWARE

CORS_ORIGIN_ALLOW_ALL = True
