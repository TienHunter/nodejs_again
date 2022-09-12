const express = require('express') // default
const router = express.Router() // default
const meController = require('../app/controllers/meController')

router.get('/stored/films', meController.getFilms)
router.get('/trash/films',meController.getSoftDelFilms)

module.exports = router;