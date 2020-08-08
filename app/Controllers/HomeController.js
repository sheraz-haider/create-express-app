class HomeController {
  static index(req, res) {
    res.render("index", { title: process.env.APP_NAME });
  }
}

module.exports = HomeController;
