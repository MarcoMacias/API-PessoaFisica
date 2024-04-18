const express = require('express')
const server = express()
const port = 8080
const pessoas = require('./src/data/data.json')

server.get('/*', (req,res) => {
    return res.json(pessoas)
})

server.listen(port, () => {
    console.log("Server On...", port)
})