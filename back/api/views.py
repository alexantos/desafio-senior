from rest_framework import permissions, viewsets

from api.models import Empresa, Candidato, Candidatura, Vaga
from api.serializers import EmpresaSerializer, CandidatoSerializer, CandidaturaSerializer, VagaSerializer


class EmpresaView(viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = []


class CandidatoView(viewsets.ModelViewSet):
    queryset = Candidato.objects.all()
    serializer_class = CandidatoSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = []


class VagaView(viewsets.ModelViewSet):
    queryset = Vaga.objects.all()
    serializer_class = VagaSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = []


class CandidaturaView(viewsets.ModelViewSet):
    queryset = Candidatura.objects.all()
    serializer_class = CandidaturaSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = []