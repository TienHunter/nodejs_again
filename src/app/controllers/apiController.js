const {
  getFilmsService,
  getFilmService,
  getCategoriesService,
  getFilmsByCategoryService,
  getShowtimesService,
  getCategoryService,
  getFilmsbyTimeIDService,
  getFilmsMoreViewsService,
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
    let film = await getFilmService(req.params.id);
    res.status(200).json(film);
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
module.exports = {
  getFilms,
  getDetailFilm,
  getCategories,
  getCategoryByCategoryID,
  getFilmsByCategory,
  getShowtimes,
  getFilmsbyTimeID,
  getFilmsMoreViews,
};
