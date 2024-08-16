// const mdb = require('knex-mariadb')
const { toBoolean } = require("validator")
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({path: path.resolve(__dirname, '../.env')})


let config = {
  version: "1.0.0",
  domain: "http://localhost",
  token: process.env.API_BEARER_TOKEN,
  app_name: "API",
  enable_logs: toBoolean(process.env.ENABLE_LOGS || "true"),
}

config.databases = {
  default: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_DOCKER_USER, 
      password: process.env.DB_DOCKER_PASS,
      database: process.env.DB_DOCKER_DATABASE, 
    },
    pool: {
      min: 0,
      max: 2,
    },
  },
}
module.exports = config
