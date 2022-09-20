const express = require("express"); // default
const router = express.Router(); // default

const siteController = require("../app/controllers/siteController");
router.get("/", siteController.getFilms);

module.exports = router;
