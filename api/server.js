const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('<h1> GIGI IS THE BEST!!! </h1>')
})

server.get('/api/users', (req, res) => {

})

server.post('/api/register', (req, res) => {

})

server.post('/api/login', (req, res) => {

})

module.exports = server