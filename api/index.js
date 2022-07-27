const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/hello', (req, res) => {
  res.status(200).send('Hello World!')
})
app.all('/test', (req, res) => {
  res.status(200).send('testing')
})
module.exports = app