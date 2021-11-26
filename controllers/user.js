const client = require('../client')
const util = require('../utils/dbUtils')
const queries = require('../utils/queries')

module.exports = {
    getUsers: async () => {
        try {
            const result = await client.connection.query(queries.findAllUsers)
            return util.handleFind(result)
          } catch (error) {
            return error
          }
    },
    getUserAccount: async (cardNumber, pin) => {
        try {
            const result = await client.connection.query(queries.findAccountByCardAndPin(cardNumber, pin))
            return util.handleFind(result)
          } catch (error) {
            return error
          }
    }
}
