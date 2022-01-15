const celery = require('celery-node');

function client(queue) {
	let client = celery.createClient(
		'amqp://guest:guest@rabbitmq:5672//',
		'redis://redis:6379/0',
		queue
	)
	return client
}



module.exports = client