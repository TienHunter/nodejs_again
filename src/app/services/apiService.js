const db = require("../../models/index");

const getFilmsService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let films = await db.Film.findAll({
        raw: true,
      });
      resolve(films);
    } catch (error) {
      reject(error);
    }
  });
};
const getFilmService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let film = await db.Film.findOne({
        where: { id },
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
      resolve(film);
    } catch (error) {
      reject(error);
    }
  });
};
const getCategoriesService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let categories = await db.Category.findAll({
        attributes: ["categoryID", "categoryName"],
        raw: true,
      });
      resolve(categories);
    } catch (error) {
      reject(error);
    }
  });
};
const getFilmsByCategoryService = (categoryID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let films = await db.Film.findAll({
        where: { categoryID },
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
const getCategoryService = (categoryID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let category = await db.Category.findOne({
        where: { categoryID },
        attributes: ["categoryID", "categoryName"],
        raw: true,
      });
      resolve(category);
    } catch (error) {
      reject(error);
    }
  });
};
const getShowtimesService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let showtimes = await db.Allcode.findAll({
        attributes: ["keyMap", "value"],
        raw: true,
      });
      resolve(showtimes);
    } catch (error) {
      reject(error);
    }
  });
};
const getFilmsbyTimeIDService = (timeID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let films = await db.Film.findAll({
        where: { timeID },
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
const getFilmsMoreViewsService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let films = await db.Film.findAll({
        limit: 12,
      });
      resolve(films);
    } catch (error) {
      reject(error);
    }
  });
};

//
const getEpisodesByFilmIDService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let episodes = await db.Episode.findAll({
        where: { filmID: id },
        order: [["episode", "asc"]],
        attributes: ["filmID", "link", "title", "episode"],
        raw: true,
      });
      resolve(episodes);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getFilmsService,
  getFilmService,
  getCategoriesService,
  getCategoryService,
  getFilmsByCategoryService,
  getShowtimesService,
  getFilmsbyTimeIDService,
  getFilmsMoreViewsService,
  getEpisodesByFilmIDService,
};
