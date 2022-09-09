
const siteRouter = require('./site')
const filmRouter = require('./film')
const route = (app) => {

   app.use('/film', filmRouter)
   app.use('/', siteRouter)
}

module.exports = route;
