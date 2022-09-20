const { getFilmsService } = require("../services/siteService");

// [GET] /home
const getFilms = async (req, res) => {
  try {
    let films = await getFilmsService();
    res.render("home", { films });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getFilms,
};
