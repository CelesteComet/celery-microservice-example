var client = require("./celery_client")("email_queue")

class EmailServiceClient {
	static async sendEmail(name) {
		const task = client.createTask("email_service.send_email");
		const result = task.applyAsync([name]);
		let awaited_result = await result.get()
		return awaited_result
	}
}

module.exports = EmailServiceClient