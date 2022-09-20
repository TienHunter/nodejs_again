const db = require("../../models/index");
const getFilmsService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let films = await db.Film.findAll({
        include: [
          {
            model: db.Category,
            attributes: ["categoryName"],
          },
          {
            model: db.Allcode,
            attributes: ["value"],
          },
        ],
        raw: true,
        nest: true,
      });
      resolve(films);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getFilmsService,
};
