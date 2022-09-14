
const {getFilmsService,getFilmService,getCategoriesService,getFilmsByCategoryService} = require('../services/apiService')
const getFilms = async(req, res) => {
    try {
        let films = await getFilmsService()
        res.status(200).json(films)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const getDetailFilm = async(req, res) => {
    try {
        let film = await getFilmService(req.params.id)
        res.status(200).json(film)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const getCategories = async(req, res) => {
    try {
        let categories = await getCategoriesService()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const getFilmsByCategory = async(req,res)=>{
    try {
        let categoryID = req.query.categoryID
        let films = await getFilmsByCategoryService(categoryID)
        res.status(200).json(films)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
module.exports = {
    getFilms,
    getDetailFilm,
    getCategories,
    getFilmsByCategory
}