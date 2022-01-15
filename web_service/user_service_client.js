var client = require("./celery_client")("user_queue")

class UserServiceClient {

	static async createUser(name) {
		const task = client.createTask("user_service.create_user");
		const result = task.applyAsync([name]);
		let awaited_result = await result.get()
		return awaited_result
	}

	static async listUsers() {
		const task = client.createTask("user_service.list_users");
		const result = task.applyAsync();
		let awaited_result = await result.get()
		return awaited_result
	}
}

module.exports = UserServiceClient