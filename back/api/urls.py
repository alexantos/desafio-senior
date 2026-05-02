from django.urls import path, include
from rest_framework import routers

from api.views import EmpresaView, CandidatoView, VagaView, CandidaturaView

router = routers.DefaultRouter()
router.register(r"empresa", EmpresaView)
router.register(r"candidato", CandidatoView)
router.register(r"vaga", VagaView)
router.register(r"candidatura", CandidaturaView)

urlpatterns = [
    path('', include(router.urls)),
]
