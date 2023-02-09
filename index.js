const { Console } = require('console')
const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send('This homepage')
})

app.get('/about', (req, res) =>{
    res.send('About us')
})

app.get('/user/:username/:id', (req, res) =>{
    res.send(`User ID: ${req.params.id}. Username; ${req.params.username}`)
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})