from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return str(self.name)


class License(models.Model):
    organization = models.ForeignKey('Organization')
    solution = models.ForeignKey('Solution')
    price = models.DecimalField(decimal_places=2, max_digits=8)
    start_date = models.DateTimeField()
    expiration_date = models.DateTimeField()
    license_key = models.CharField(max_length=20)


class Solution(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return str(self.name)


class PriceTier(models.Model):
    solution = models.ForeignKey('Solution')
    name = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2, max_digits=4)

    def __str__(self):
        return str(self.name)
