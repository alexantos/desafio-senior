# Desafio Senior

Desenvolvido com django 6.0.4 e drf 3.17.1

### Configurando o projeto

```bash
python -m venv .venv
```

Após a configuração da venv podemos executar o comando abaixo para instalar as dependências do projeto:

```bash
pip install -r requirements.txt
```

Fazemos as migrações das tabelas com:

```bash
python manage.py migrate
```

Por fim podemos rodar localmente o projeto com:

```bash
python manage.py runserver
```