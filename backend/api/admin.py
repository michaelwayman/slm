from django.contrib import admin
from .models import Organization, License, Solution, PriceTier

# Register your models here.
admin.site.register(Organization)
admin.site.register(License)
admin.site.register(Solution)
admin.site.register(PriceTier)
