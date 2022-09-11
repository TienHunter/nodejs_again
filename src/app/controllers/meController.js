const {getFilms} = require('../services/meServices')

const getMePage = async(req,res)=>{
    try {
        let films = await getFilms()
        res.render('me/list-films',{films})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = {
    getMePage
}