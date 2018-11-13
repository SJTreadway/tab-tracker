const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 8082
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello, ${req.body.email}! Your user was registered! Have fun!`
  })
})

app.listen(port, () => console.log('App is being served on port:', port))