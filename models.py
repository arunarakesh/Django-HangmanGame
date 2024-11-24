from django.db import models

# Create your models here.
#create table themes

class hangtheme(models.Model):
    theme_name = models.CharField(max_length=255)

class countries(models.Model):
    country_code = models.CharField(max_length=10)
    latitude = models.DecimalField(max_digits=8, decimal_places=6)
    longitude = models.DecimalField(max_digits=8, decimal_places=6)
    country_name = models.CharField(max_length=255)

class cities(models.Model):
    city = models.CharField(("city"), max_length=255)
    city_ascii = models.CharField(("city_ascii"), max_length=255)
    lat = models.FloatField(("lat"))
    lng = models.FloatField(("lng"))
    country = models.CharField(("country"), max_length=255)
    iso2 = models.CharField(("iso2"), max_length=10)
    iso3 = models.CharField(("iso3"), max_length=10)
    admin_name = models.CharField(("admin_name"), max_length=255)
    capital = models.CharField(("capital"), max_length=255)
    population = models.FloatField(("population"))
    cityid = models.IntegerField(("id"))

class famouspeople(models.Model):
    Name = models.CharField(("Name"), max_length=255)
    Occupation = models.CharField(("Occupation"), max_length=255)

class Flowers(models.Model):
    Name = models.CharField(("Name"), max_length=255)
    
class fruits(models.Model):
    FruitsId = models.IntegerField(("id"))
    Name = models.CharField(("Name"), max_length=255)
    price = models.DecimalField(("price"),max_digits=4, decimal_places=2)
    quantity = models.PositiveIntegerField(("quantity"))

class currency(models.Model):
    Entity = models.CharField(("Entity"), max_length=255)
    Currency = models.CharField(("Currency"),max_length=255)
    AlphabeticCode = models.CharField(("AlphabeticCode"),max_length=255)
    NumericCode = models.IntegerField(("NumericCode"),null=True)
    MinorUnit = models.IntegerField(("MinorUnit"))
    WithdrawalDate = models.DateField(("WithdrawalDate"))

