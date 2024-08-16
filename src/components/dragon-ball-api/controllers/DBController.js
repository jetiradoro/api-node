const responses = require('../../../libs/ResponseService')
const DBApiService = require('../services/DBApiService')

const DBController = {
    getCharacters: async (req, res) => {
        try{
            const request = await DBApiService.getCharacters()
            const result = request.data.items
            responses.successResponse(res, result)
        }catch(err){
            responses.failResponse(res, err)
        }
    }
}

module.exports = DBController