const express = require('express') // default
const router = express.Router() // default

const newsController = require('../app/controllers/NewsController')

router.use('/:slug', newsController.getDetailNews)
router.use('/', newsController.getNewsPage)
module.exports = router;

