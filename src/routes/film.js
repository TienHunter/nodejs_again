const express = require('express') // default
const router = express.Router() // default
const upload = require('../utils/storageFile')
const filmController = require('../app/controllers/filmController')

router.get('/create', filmController.getDataFilmCreate)
router.post('/create-film',upload.single('upload-image'),filmController.createFilm)
router.get('/:id/edit', filmController.editFilm)
router.post('/:id/updated',upload.single('upload-image'),filmController.updatedFilm)
router.delete('/:id/deleted',filmController.deleteFilm)
router.delete('/:id/deleted-force',filmController.deleteForceFilm)
router.patch('/:id/restored',filmController.restoredFilm)
router.get('/:id/detail',filmController.getDetailFilm)
module.exports = router;


