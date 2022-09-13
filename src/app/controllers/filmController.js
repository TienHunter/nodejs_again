const {
    getDataToCreateFilm,
    createFilmDb,
    getFilmByID,
    updatedFilmService,
    deleteFilmService,
    deleteForceFilmService,
    restoredFilmService,
    getDetailFilmService
    } = require('../services/filmServices')

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
            res.redirect('me/stored/films')
            else
            res.status(500).json({message:'error from db'})
        }else {
            res.status(200).json({message:'Missing parementer'})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const editFilm = async(req, res) => {
    try {
        let film = await getFilmByID(req.params.id)
        let data = await getDataToCreateFilm();
            let times = data.times
            let categories = data.categories

        res.render('films/edit-film',{film,times,categories})
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const updatedFilm = async(req, res) => {
    let data = {}
    Object.assign(data,{
        filmName:req.body.filmName,
        description:req.body.description,
        categoryID:req.body.category,
        timeID:req.body.timeShow,
    })
    if(req.file) {
        data.image = req.file.filename
    }
    // res.json(data)
    try {
        let id = req.params.id
        if(!id) res.status(404).json({message:'missing params'})
        await updatedFilmService(id, data)
        res.redirect('/me/stored/films')
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const deleteFilm = async(req, res) => {
    try {
        let filmID = req.params.id
        if(!filmID) res.status(404).json({message:'missing params'})
        await deleteFilmService(filmID)
        res.redirect('/me/stored/films')
    } catch (error) {
        res.status(500).json({message:error})            
    }
}
const deleteForceFilm = async(req, res) => {
    try {
        let filmID = req.params.id
        if(!filmID) res.status(404).json({message:'missing params'})
        await deleteForceFilmService(filmID)
        res.redirect('/me/trash/films')
    } catch (error) {
        res.status(500).json({message:error})            
    }
}
const restoredFilm = async(req, res) => {
   try {
    let filmID = req.params.id
    if(!filmID) res.status(404).json({message:'missing params'})
    await restoredFilmService(filmID)
    res.redirect('/me/trash/films')
   } catch (error) {
    res.status(500).json({message:error})
   }
}
const getDetailFilm = async(req, res) => {
    try {
        let filmID = req.params.id
        if(!filmID) res.status(404).json({message:'missing params'})
        let film = await getDetailFilmService(filmID)
        // res.json(film)
        res.render('films/detail-film',{film})
    }catch (error) {
        res.status(500).json({message:error})
    }
}
module.exports = {
    getDataFilmCreate,
    createFilm,
    editFilm,
    updatedFilm,
    deleteFilm,
    deleteForceFilm,
    restoredFilm,
    getDetailFilm
}