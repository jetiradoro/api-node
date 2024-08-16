const postmanToOpenApi = require('postman-to-openapi')
const path = require('path')

const postmanCollection = path.resolve(__dirname,'../assets/postman.json')
const outputFile = path.resolve(__dirname,'../assets/collection.yml')

const options = require('../config')

// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, options)
	.then(() => {
		console.log('OpenAPI specs: success')
	})
	.catch((err) => {
		console.log(err)
	})
