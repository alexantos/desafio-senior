from django.contrib import admin

from api.models import Candidato, Empresa, Candidatura, Vaga

admin.site.register(Empresa)
admin.site.register(Candidato)
admin.site.register(Vaga)
admin.site.register(Candidatura)
