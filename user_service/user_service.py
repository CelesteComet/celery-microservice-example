from celery import Celery
from user_business_logic import UserBusinessLogic

app = Celery('user_service', broker='amqp://guest:guest@rabbitmq:5672//', backend='redis://redis:6379/0',)

@app.task()
def create_user(name: str) -> str:
	return UserBusinessLogic.create_user(name)

@app.task()
def list_users() -> list:
	return UserBusinessLogic.list_users()