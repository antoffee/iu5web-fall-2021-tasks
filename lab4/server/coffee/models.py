from django.db import models


class Cafe(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=300)

    def __str__(self):
        return self.name


class Coffee(models.Model):
    name = models.CharField(max_length=200, verbose_name="Name")
    price = models.PositiveIntegerField(verbose_name="Price")
    description = models.TextField(verbose_name="Description")
    score = models.PositiveSmallIntegerField(verbose_name="Score")
    country = models.CharField(max_length=200, verbose_name="Country")
    main_image = models.ImageField(
        upload_to='coffee_assets/',
        blank=True
    )
    cafe = models.ForeignKey(
        'Cafe',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.name
