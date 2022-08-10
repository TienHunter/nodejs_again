// [GET] /home
const getHomePage = (req, res) => {
   res.render('home')
}
// [GET] /search
const getSearchPage = (req, res) => {
   res.send("Search page !!!")
}

module.exports = {
   getHomePage,
   getSearchPage
}