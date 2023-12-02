require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('twitter page')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login page</h1>')
})

app.get('/chai', (req, res) => res.send('<h1>Chai page</h1>'))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

// Export the Express API
module.exports = app
