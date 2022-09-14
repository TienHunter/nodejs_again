const db = require('../../models/index')

const getFilmsService = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let films = await db.Film.findAll({
                raw:true
            })
            resolve(films)
        } catch (error) {
            reject(error)
        }
    })

}
const getFilmService=(id)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let film = await db.Film.findOne({
                where:{id},
                include:[
                    {
                        model:db.Category,
                        attributes:['categoryName']
                    },
                    {
                        model:db.Allcode,
                        attributes:['value']
                    }
                ],
                raw:true,
                nest:true
            })
            resolve(film)
        } catch (error) {
            reject(error)
        }
    })
}
const getCategoriesService = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let categories = await db.Category.findAll({
                attributes:['categoryID','categoryName'],
                raw:true
            })
            resolve(categories)
        } catch (error){
            reject(error)
        }
    })
}
const getFilmsByCategoryService = (categoryID)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let films = await db.Film.findAll({
                where:{categoryID},
                include:[
                    {
                        model:db.Category,
                        attributes:['categoryName']
                    },
                    {
                        model:db.Allcode,
                        attributes:['value']
                    }
                ],
                raw:true,
                nest:true
            })
            resolve(films)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    getFilmsService,
    getFilmService,
    getCategoriesService,
    getFilmsByCategoryService
}