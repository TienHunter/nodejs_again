const {getFilmsService,getFilmsSoftDel} = require('../services/meServices')

const getFilms = async(req,res)=>{
    try {
        let films = await getFilmsService()
        let filmsSoftDel = await getFilmsSoftDel()
        let numOfSoftDel = filmsSoftDel.length ? filmsSoftDel.length : 0
        res.render('me/list-films',{films,numOfSoftDel})
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const getSoftDelFilms = async(req, res) => {
    try {

        let filmsSoftDel = await getFilmsSoftDel()
        res.render('me/trash-films',{filmsSoftDel})
    } catch (error) {
        res.status(500).json({message:error})
    }
}
module.exports = {
    getFilms,
    getSoftDelFilms
}