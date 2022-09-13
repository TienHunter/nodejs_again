
const {getFilmsService} = require('../services/apiService')
const getFilms = async(req, res) => {
    try {
        let films = await getFilmsService()
        res.status(200).json(films)
    } catch (error) {
        res.status(500).json({message:error})
    }
}
module.exports = {
    getFilms
}