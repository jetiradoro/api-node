// const mdb = require('knex-mariadb')
const {toBoolean} = require('validator')

let config = {
	version: '1.0.0',
	domain: 'http://localhost',
	token: process.env.API_BEARER_TOKEN,
	app_name: 'API',
	enable_logs : toBoolean(process.env.ENABLE_LOGS || 'true')
}

config.databases = {
	default: {
		client: 'mysql',
		connection: {
			host: process.env.DB_HOST, //'innobox-nodered-db',
			user: process.env.DB_DOCKER_USER, //'db_user',
			password: process.env.DB_DOCKER_PASS, //'secret',
			database: process.env.DB_DOCKER_DATABASE, //'innobox',
		},
		pool: {
			min: 0,
			max: 2,
		},
	},
}
module.exports = config
