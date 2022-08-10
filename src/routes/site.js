const express = require('express') // default
const router = express.Router() // default

const siteController = require('../app/controllers/SiteController')

router.get('/search', siteController.getSearchPage)
router.get('/', siteController.getHomePage)

module.exports = router;