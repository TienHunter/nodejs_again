const {
  getFilmsService,
  getFilmService,
  getCategoriesService,
  getFilmsByCategoryService,
  getShowtimesService,
  getCategoryService,
  getFilmsbyTimeIDService,
  getFilmsMoreViewsService,
  getEpisodesByFilmIDService,
  getFilmsByfilmNameService,
} = require("../services/apiService");
const getFilms = async (req, res) => {
  try {
    let films = await getFilmsService();
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getDetailFilm = async (req, res) => {
  try {
    let filmID = req.params.id;
    let film = await getFilmService(filmID);
    let episodes = await getEpisodesByFilmIDService(filmID);
    if (film && episodes) {
      let data = {};
      data.film = film;
      data.episodes = episodes;
      res.status(200).json(data);
    } else {
      res.status(500).json({ message: "error look up from db" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getCategories = async (req, res) => {
  try {
    let categories = await getCategoriesService();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getCategoryByCategoryID = async (req, res) => {
  try {
    let category = await getCategoryService(req.query.categoryID);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getFilmsByCategory = async (req, res) => {
  try {
    let categoryID = req.query.categoryID;
    let films = await getFilmsByCategoryService(categoryID);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getShowtimes = async (req, res) => {
  try {
    let showtimes = await getShowtimesService();
    res.status(200).json(showtimes);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getFilmsbyTimeID = async (req, res) => {
  try {
    let timeID = req.query.timeID;
    let films = await getFilmsbyTimeIDService(timeID);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getFilmsMoreViews = async (req, res) => {
  try {
    let moreView = await getFilmsMoreViewsService();
    res.status(200).json(moreView);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getFilmsByfilmName = async (req, res) => {
  try {
    let keyFilm = req.query.keyFilm;
    // console.log(keyFilm);
    let films = await getFilmsByfilmNameService(keyFilm);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  getFilms,
  getDetailFilm,
  getCategories,
  getCategoryByCategoryID,
  getFilmsByCategory,
  getShowtimes,
  getFilmsbyTimeID,
  getFilmsMoreViews,
  getFilmsByfilmName,
};
