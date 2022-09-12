const db = require('../../models/index')

const getDataToCreateFilm = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let times = await db.Allcode.findAll({
                raw:true,
                attributes: ['keyMap', 'value',]
            })
            let categories = await db.Category.findAll({
                raw:true,
                attributes: ['categoryID', 'categoryName']
            })
            let data = {};
            if(times && categories) {
                data.times = times
                data.categories = categories
            }
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}
const createFilmDb = (data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let film = await db.Film.create({
                ...data
            })
            resolve(film)
        }
        catch (error) {
            reject(error)
        }
    })
}
const getFilmByID = (id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let film = await db.Film.findOne({
                where:{
                    id
                },
                raw:true 
            })
            resolve(film)
        }
        catch (error){
            reject(error)   
        }
    })
}
const updatedFilmService = (id,data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            await db.Film.update({
                ...data,
            },{
                where:{id}
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}
const deleteFilmService=(id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            await db.Film.destroy({
                where:{
                    id
                },
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}
const restoredFilmService = (id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            await db.Film.restore({
                where:{id}
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}
const deleteForceFilmService=(id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            await db.Film.destroy({
                where:{
                    id
                },
                force: true
            })
            resolve(true)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    getDataToCreateFilm,
    createFilmDb,
    getFilmByID,
    updatedFilmService,
    deleteFilmService,
    restoredFilmService,
    deleteForceFilmService
}