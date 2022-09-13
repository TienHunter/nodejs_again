
const {getFilmsService,getFilmService} = require('../services/apiService')
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
module.exports = {
    getFilms,
    getDetailFilm
}