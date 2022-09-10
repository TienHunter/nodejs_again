const {getDataToCreateFilm,createFilmDb} = require('../services/filmServices')
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
        res.status(500).json({message:error})
    }
}
const createFilm = async(req, res) => {
    try {
        let data = {}
        Object.assign(data,{
            filmName:req.body.filmName,
            description:req.body.description,
            categoryID:req.body.category,
            timeID:req.body.timeShow,
            image:req.file.filename
        })
        if(data && data.filmName && data.categoryID && data.timeID && data.image) {
            let film = await createFilmDb(data)
            if(film)
            res.send('create film success')
            else
            res.status(500).json({message:'error from db'})
        }else {
            res.status(200).json({message:'Missing parementer'})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}
module.exports = {
    getDataFilmCreate,
    createFilm
}