from celery import Celery
from email_business_logic import EmailBusinessLogic

app = Celery('email_service', broker='amqp://guest:guest@rabbitmq:5672//', backend='redis://redis:6379/0',)
@app.task()
def send_email(name: str) -> str:
	return EmailBusinessLogic.send_email(name)