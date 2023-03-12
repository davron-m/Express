const { Console } = require('console')
const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))



/*app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})*/


app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.send('About us')
})

app.post('/check-user', (req, res) => {
    let username = req.body.username
    if (username == "")
        return res.redirect('/')
    else 
        return res.redirect('/user/' + username)
})

/*app.get('/user/:username/:id', (req, res) =>{
    res.send(`User ID: ${req.params.id}. Username; ${req.params.username}`)
})*/

app.get('/user/:username', (req, res) => {
    let data = {username: req.params.username, hobbies: ['Football', 'Skate', 'Hockey']}
    res.render('user', data)
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})