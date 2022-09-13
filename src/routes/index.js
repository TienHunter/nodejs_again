
const siteRouter = require('./site')
const filmRouter = require('./film')
const meRouter= require('./me')
const apiRouter = require('./api')
const route = (app) => {

   app.use('/film', filmRouter)
   app.use('/me', meRouter)	
   app.use('/api', apiRouter)
   app.use('/', siteRouter)
}

module.exports = route;
