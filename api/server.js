const express = require('express')
const cors = require('cors')
const users = require('./users')

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('<h1> GIGI IS THE BEST!!! </h1>')
})

server.get('/api/users', (req, res) => {
    let randomUsers = Math.floor(Math.random() * users.length)
    res.send(`<h1>${users[randomUsers]}</h1>`)
})

server.post('/api/register', (req, res) => {

})

server.post('/api/login', (req, res) => {

})

module.exports = server