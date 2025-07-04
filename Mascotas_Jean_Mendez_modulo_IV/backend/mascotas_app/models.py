from django.db import models

class Mascota(models.Model):
    nombre = models.CharField(max_length=100)
    especie = models.CharField(max_length=50)
    edad = models.IntegerField()
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre
