const base_url = "https://dragonball-api.com/api"
const axios = require("axios")
const api  = axios.create({
    baseURL: base_url
})

const DBApiService = {
    getCharacters: async () => {
        const response = await api.get('/characters')
        const result = response.data.items.map(character => {
            return{
                id: character.id,
                nombre: character.name,
                imagen: character.image,
                tipo: character.race,
                poder_ki: character.maxKi,
                descripcion: character.description
            }
        })

        return result
    }
}
module.exports = DBApiService