const EmailRpcServiceClient = require("./email_service_client");
const UserRpcServiceClient = require("./user_service_client");


class RegistrationBusinessLogic {

	static async list_users() {
		let listUsersResponse = await UserRpcServiceClient.listUsers()
		return {
			"responseFromUserService": listUsersResponse
		}
	}

	static async register_user(name) {
		let createUserResponse = await UserRpcServiceClient.createUser(name)
		let sendEmailResponse = await EmailRpcServiceClient.sendEmail(name);
		return {
			"responseFromUserService": createUserResponse,
			"responseFromEmailService": sendEmailResponse
		}
	}
}

module.exports = RegistrationBusinessLogic