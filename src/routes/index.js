
const siteRouter = require('./site')
const newsRouter = require('./news')
const route = (app) => {

   app.use('/news', newsRouter)
   app.use('/', siteRouter)
}

module.exports = route;
