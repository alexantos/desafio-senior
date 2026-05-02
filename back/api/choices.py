from django.db import models


class Escolaridade(models.TextChoices):
    ENSINO_FUNDAMENTAL = 'ENSINO_FUNDAMENTAL', 'Ensino fundamental'
    ENSINO_MEDIO = 'ENSINO_MEDIO', 'Ensino médio'
    TECNOLOGO = 'TECNOLOGO', 'Tecnólogo'
    ENSINO_SUPERIOR = 'ENSINO_SUPERIOR', 'Ensino Superior'
    POS_MBA_MESTRADO = 'POS_MBA_MESTRADO', 'Pós / MBA / Mestrado'
    DOUTORADO = 'DOUTORADO', 'Doutorado'


class FaixaSalarial(models.TextChoices):
    ATE_MIL = 'ATE_MIL', 'Até R$ 1.000,00'
    DE_MIL_A_DOIS_MIL = 'DE_MIL_A_DOIS_MIL', 'De R$ 1.000,00 à R$ 2.000,00'
    DE_DOIS_MIL_A_TRES_MIL = 'DE_DOIS_MIL_A_TRES_MIL', 'De R$ 2.000,00 à R$ 3.000,00'
    ACIMA_DE_TRES_MIL = 'ACIMA_DE_TRES_MIL', 'Acima de R$ 3.000,00'
