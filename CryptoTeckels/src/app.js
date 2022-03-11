const path = require('path')
const express = require('express')
    // const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000

// define path for express config
const publicDirPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../views')

// setup handlebars view engine and path
app.set('view engine', 'hbs')
app.set('views', viewPath)

// setup static path to serve
app.use(express.static(publicDirPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'CryptoTeckels',
        description: 'Welcome to the Teckels Metaverse!'
    })
})

app.get('/index.hbs', (req, res) => {
    res.render('index', {
        title: 'CryptoTeckels',
        description: 'Landing Page!'
    })
})

app.listen(port, () => {
    console.log(`Express server running on port: ${port}`)
})