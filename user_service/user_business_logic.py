import logging

users = set()

class UserBusinessLogic:
	@staticmethod
	def create_user(name: str):
		users.add(name)
		logging.info(f"Created user {name}")
		return f"Created user {name}"

	@staticmethod
	def list_users():
		logging.info(f"Listing users {list(users)}")
		return list(users)