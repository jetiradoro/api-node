
const LogService = require('../../../libs/LogService')
const { describe, it, expect } = require('@jest/globals')
const DBApiService = require('../services/DBApiService')

describe('Dragon Ball Api Service Test', () => {
    it('get characters', async () => {
        const result = await DBApiService.getCharacters()
        LogService.log(result.data)
        expect(true).toBe(true)
    })
})