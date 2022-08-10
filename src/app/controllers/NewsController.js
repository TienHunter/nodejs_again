

// [GET] /news
const getNewsPage = (req, res) => {
   res.render('news')
}
// [GET] /new/:slug
const getDetailNews = (req, res) => {
   res.send("Detail News !!!")
}

module.exports = {
   getNewsPage,
   getDetailNews
}