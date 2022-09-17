const express = require("express"); // default
const router = express.Router(); // default
const apiController = require("../app/controllers/apiController");

router.get("/films/category", apiController.getFilmsByCategory);
router.get("/films/showtimes", apiController.getFilmsbyTimeID);
router.get("/films", apiController.getFilms);
router.get("/film/:id", apiController.getDetailFilm);
router.get("/categories", apiController.getCategories);
router.get("/category", apiController.getCategoryByCategoryID);
router.get("/showtimes", apiController.getShowtimes);
router.get("/films/showmore", apiController.getFilmsMoreViews);
module.exports = router;
