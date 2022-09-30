require('dotenv').config()
const express = require('express')
const app = express()

//localhost:3000/places

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world! what up')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
