const CryptoJS = require('crypto-js')
const config = require('../config')
const secretKey = config.token_encrypt

const encrypt = (text) => {
	const encrypted = CryptoJS.AES.encrypt(text, secretKey)
	return encrypted
}

const decrypt = (hash) => {
	const decrypted = CryptoJS.AES.decrypt(hash, secretKey)
	return decrypted.toString(CryptoJS.enc.Utf8)
}

module.exports = {
	encrypt,
	decrypt,
}
