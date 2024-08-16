const provider = require("./knex")

module.exports = class {
  static table
  static connection = "default"

  static getById = function (id) {
    return this.query().where({ id }).first()
  }

  /**
   * @param {String} database
   * @returns {import('knex')}
   */
  static query(database = this.connection) {
    return provider[database](this.table)
  }

  static getBy = function (filter) {
    return this.query().where(filter).first()
  }

  static getAll = function (filter) {
    return filter ? this.query().where(filter) : this.query()
  }

  static raw = async function (qry, params = []) {
    var statement = await provider[this.connection].raw(qry, params)
    return statement[0]
  }

  static create = function (data) {
    return this.query().insert(data)
  }

  static update = function (data, filter) {
    return this.query().where(filter).update(data)
  }

  static delete = function (filter) {
    return this.query().where(filter).del()
  }

  static truncate = function () {
    return this.query().truncate()
  }
}
