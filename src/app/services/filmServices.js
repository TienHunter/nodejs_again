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
module.exports = {
    getDataToCreateFilm
}