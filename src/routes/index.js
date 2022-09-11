
const siteRouter = require('./site')
const filmRouter = require('./film')
const meRouter= require('./me')
const route = (app) => {

   app.use('/film', filmRouter)
   app.use('/me', meRouter)	
   app.use('/', siteRouter)
}

module.exports = route;
