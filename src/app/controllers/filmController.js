const {getDataToCreateFilm} = require('../services/filmServices')
const getDataFilmCreate = async(req, res) => {
    try {
        let data = await getDataToCreateFilm();
        if(data && data.times && data.categories) {
            let times = data.times
            let categories = data.categories

            res.render('films/create-film',{times,categories})
        }
        else {
            res.status(501).json({message : 'Error from database'})
        }
    } catch (error) {
        res.status(500).json({message:'Error from server'})
    }
}
const createFilm = (req, res) => {
    res.json({
        fileName : req.file,
        content: req.body
    })
}
module.exports = {
    getDataFilmCreate,
    createFilm
}