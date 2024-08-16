const knex = require("knex")
const config = require("../config").databases

const times = {}
const databases = {}

// knex.QueryBuilder.extend('upsert', function (data) {
// 	return this.insert(data).onConflict().merge()
// })

Object.keys(config).forEach((dbname) => {
  databases[dbname] = knex(config[dbname] || config["default"])

  databases[dbname]
    .on("query", (data) => {
      times[data.__knexQueryUid] = Date.now()
    })
    .on("query-response", (response, data) => {
      console.debug({
        sql: data.sql,
        executionTime: Date.now() - times[data.__knexQueryUid],
      })
      delete times[data.__knexQueryUid]
    })
    .on("query-error", (error, data) => {
      delete times[data.__knexQueryUid]
      console.error(error)
    })
})

module.exports = databases
