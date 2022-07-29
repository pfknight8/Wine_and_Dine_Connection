const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const routes = require('./routes')
const { index } = require('./models/meal')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use(express.static(`${__dirname}/client/build`))

app.use('/wineDB', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error!'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))