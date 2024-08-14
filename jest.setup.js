const waitOn = require('wait-on')
const {domain} = require('./src/config')
// Configura la URL del servidor que deseas esperar
const serverUrl = `${domain}`

// Espera a que el servidor esté disponible antes de ejecutar las pruebas
beforeAll(async () => {
	await waitOn({
		resources: [serverUrl],
	})
})
