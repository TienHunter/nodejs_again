const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
require("dotenv").config();
const port = process.env.PORT || 3001

const route = require('./routes')
// HTTP protocol
// app.use(morgan('combined'))
// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }) /** Configuration */);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views') /** graft path */);
// console.log(__dirname);

// Set static folder
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
   extended: true
}));
app.use(express.json());


//Route init
route(app)


app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})