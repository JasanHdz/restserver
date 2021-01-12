const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { config } = require('./config')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('Hello world')
})

app.get('/usuario', (req, res) => {
  res.json('get usuarios')
})

app.post('/usuario', (req, res) => {
  const body = req.body

  res.json({
    person: body
  })
})

app.put('/usuario/:id', (req, res) => {
  const id = req.params.id
  res.json({
    id
  })
})

app.listen(config.port, () => {
  console.log(`Escuchando en http://localhost:${port}`)
})