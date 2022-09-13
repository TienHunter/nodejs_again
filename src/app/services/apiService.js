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
module.exports = {
    getFilmsService
}