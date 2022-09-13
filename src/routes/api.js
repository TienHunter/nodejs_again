const express = require('express') // default
const router = express.Router() // default
const apiController = require('../app/controllers/apiController')

router.get('/films', apiController.getFilms)
router.get('/film/:id',apiController.getDetailFilm)
module.exports = router;
