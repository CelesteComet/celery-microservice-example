FROM python:3.8-slim-buster
COPY . /app
WORKDIR /app
RUN pip install poetry
RUN poetry install
CMD poetry run celery -A email_service worker -l INFO -Q email_queue