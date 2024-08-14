// const moment = require('moment')
const utils = {
	getRandomDate: () => {
		return utils.randomDate(new Date(2012, 0, 1), new Date())
	},
	randomDate: (start, end) => {
		const date = new Date(
			start.getTime() + Math.random() * (end.getTime() - start.getTime())
		)

		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
	},

	parseAxiosError(payload) {
		let error = {}
		if (payload.response) {
			error.message = payload.response.data
			error.status = payload.response.status
		} else if (payload.message) {
			error.message = payload.message
		} else if (payload.request) {
			error.message = payload.request
		} else {
			error.message = payload
		}
		return error
	},
}



module.exports = utils
