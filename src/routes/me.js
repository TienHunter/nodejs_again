const express = require('express') // default
const router = express.Router() // default
const meController = require('../app/controllers/meController')

router.get('/stored/films', meController.getMePage)

module.exports = router;