const express = require('express')
const cors = require('cors')
const pino = require('express-pino-logger')()

const userModel = require('./controllers/user')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())
app.use(pino)

app.get('/users', async (req, res) => {
  req.log.info('getAllUsers()')
  const result = await userModel.getUsers()
  if (!result) {
    res.statusCode = 404
    return res.send()
  } else {
    return res.send(JSON.stringify(result))
  }
})

app.get('/users/account/:cardNumber/pin/:pin', async (req, res) => {
  req.log.info('getUserAccount()')
  const { cardNumber, pin } = req.params
  const result = await userModel.getUserAccount(cardNumber, pin)
  if (!result) {
    res.statusCode = 404
    return res.send()
  } else {
    return res.send(JSON.stringify(result))
  }
})

app.listen(port, function () {
  console.log(`Up and running on port: ${port}`)
})
