const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
// HTTP protocol
app.use(morgan('combined'))
// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }) /** Configuration */);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views') /** graft path */);
// console.log(__dirname);
app.get('/', (req, res) => {
   res.render('home')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})