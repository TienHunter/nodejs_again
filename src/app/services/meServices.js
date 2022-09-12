const { Op } = require("sequelize")
const db = require("../../models")
const category = require("../../models/category")

const getFilmsService = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let films = await db.Film.findAll({
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
const getFilmsSoftDel = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let filmsSoftDel = await db.Film.findAll({
                where:{
                    deletedAt:{
                        [Op.not]:null   
                    }
                },

                paranoid: false,
                raw:true
            })
            resolve(filmsSoftDel)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports ={
    getFilmsService,
    getFilmsSoftDel
}