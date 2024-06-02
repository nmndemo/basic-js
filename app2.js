const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Halo sat!')
})

app.listen(3001)
