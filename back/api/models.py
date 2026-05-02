from django.contrib.auth.models import User
from django.db import models

from api.choices import Escolaridade, FaixaSalarial


class Empresa(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT)
    razao_social = models.CharField(max_length=127)
    nome_fantasia = models.CharField(max_length=127)
    cnpj = models.CharField(max_length=14)

    def __str__(self):
        return self.nome_fantasia


class Candidato(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT)
    nome = models.CharField(max_length=127)
    cpf = models.CharField(max_length=14)
    nascimento = models.DateTimeField()
    pretensao_salarial = models.DecimalField(max_digits=7, decimal_places=2)
    experiencia = models.TextField()
    escolaridade = models.CharField(max_length=31, choices=Escolaridade)

    def __str__(self):
        return self.nome


class Vaga(models.Model):
    empresa = models.ForeignKey(Empresa, on_delete=models.PROTECT)
    nome = models.CharField(max_length=255)
    faixa_salarial = models.CharField(max_length=31, choices=FaixaSalarial)
    requisitos = models.TextField()
    escolaridade_exigida = models.CharField(max_length=31, choices=Escolaridade)

    def __str__(self):
        return self.nome


class Candidatura(models.Model):
    candidato = models.ForeignKey(Candidato, on_delete=models.PROTECT)
    vaga = models.ForeignKey(Vaga, on_delete=models.PROTECT)
    data_hora = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.candidato.nome + ' + ' + self.candidato.nome
