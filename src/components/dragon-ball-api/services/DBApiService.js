const base_url = "https://dragonball-api.com/api"
const axios = require("axios")
const api  = axios.create({
    baseURL: base_url
})

const DBApiService = {
    getCharacters: async () => {
        return await api.get('/characters')
    }
}
module.exports = DBApiService