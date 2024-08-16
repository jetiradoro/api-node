const responses = require('../../../libs/ResponseService')
const DBApiService = require('../services/DBApiService')

const DBController = {
    getCharacters: async (req, res) => {
        try{
            const result = await DBApiService.getCharacters()
            responses.successResponse(res, result)
        }catch(err){
            responses.failResponse(res, err)
        }
    }
}

module.exports = DBController