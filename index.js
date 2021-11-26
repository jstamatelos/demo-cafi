const express = require('express')
const cors = require('cors')
const pino = require('express-pino-logger')()

const userModel = require('./controllers/user')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())
app.use(pino)

app.get('/', function (req, res) {
  req.log.info('get () :: attempting to open connection to server...')
  res.send()
})

app.get('/users', async (req, res) => {
  req.log.info('getAllUsers() :: getting all users')
  const result = await userModel.getUsers()
  if (!result) {
    res.statusCode = 404
    return res.send()
  } else {
    return res.send(result.stringify(result[0]))
  }
})

app.get('/users/account/:cardNumber/pin/:pin', async (req, res) => {
  req.log.info('getUserAccount() :: getting account information')
  const { cardNumber, pin } = req.params
  const result = await userModel.getUserAccount(cardNumber, pin)
  if (!result) {
    res.statusCode = 404
    return res.send()
  } else {
    return res.send(JSON.stringify(result[0]))
  }
})

app.listen(port, function () {
  console.log(`Up and running on port: ${port}`)
})
