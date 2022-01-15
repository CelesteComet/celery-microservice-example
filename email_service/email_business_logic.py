import logging

class EmailBusinessLogic:
	@staticmethod
	def send_email(name: str):
		email = f"{name}@gmail.com"
		return f"Sent an email to {email}"