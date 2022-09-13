const express = require('express') // default
const router = express.Router() // default
const apiController = require('../app/controllers/apiController')

router.get('/films', apiController.getFilms)

module.exports = router;
