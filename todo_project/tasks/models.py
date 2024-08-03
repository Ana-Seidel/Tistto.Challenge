from django.db import models

class Users(models.Model):
    email = models.EmailField(unique=True)
    nome = models.CharField(max_length=255)
    sobrenome = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    descricao = models.TextField(blank=True)

    def __str__(self):
        return f"{self.nome} {self.sobrenome}"

class Task(models.Model):
    owner = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='tasks')
    descricao = models.TextField()

    def __str__(self):
        return f"Task for {self.owner.nome} {self.owner.sobrenome}"
