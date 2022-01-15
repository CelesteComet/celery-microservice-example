const express = require('express')
const RegistrationBusinessLogic = require("./registration_business_logic")
const app = express()
const port = 3000

app.get('/users/:name', async (req, res) => {
	let name = req.params.name
	let registerUserResponse = await RegistrationBusinessLogic.register_user(name)
	res.send(registerUserResponse)
})

app.get('/users', async (req, res) => {
	let listUsersResponse = await RegistrationBusinessLogic.list_users()
	res.send(listUsersResponse)
})

app.listen(port, () => {
  	console.log(`Example app listening at http://localhost:${port}`)
})