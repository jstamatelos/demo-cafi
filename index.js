const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

app.listen(port, function () {
  console.log(`Up and running on port: ${port}`)
})
