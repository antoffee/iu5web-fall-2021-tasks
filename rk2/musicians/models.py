from django.db import models


class Orchestra(models.Model):
    name = models.CharField(max_length=256, verbose_name="Orchestra name")

    def __str__(self):
        return self.name


class Musician (models.Model):
    name = models.CharField(max_length=256, verbose_name="Musician name")
    salary = models.PositiveIntegerField(verbose_name="Musician's salary")
    orchestra = models.ForeignKey(
        Orchestra,
        on_delete=models.SET_DEFAULT,
        null=True,
        default=None,
        related_name="musicians"
    )

    def __str__(self):
        return self.name
