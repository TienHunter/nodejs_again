const express = require('express') // default
const router = express.Router() // default
const upload = require('../utils/storageFile')
const filmController = require('../app/controllers/filmController')

router.get('/create', filmController.getDataFilmCreate)
router.post('/create-film',upload.single('upload-image'),filmController.createFilm)
module.exports = router;