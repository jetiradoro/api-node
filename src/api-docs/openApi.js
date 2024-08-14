const postmanToOpenApi = require('postman-to-openapi')

const postmanCollection = 'src/api/postman.json'
const outputFile = 'src/api/collection.yml'

const options = require('./options.js')

// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, options)
	.then((result) => {
		console.log('OpenAPI specs: success')
	})
	.catch((err) => {
		console.log(err)
	})
