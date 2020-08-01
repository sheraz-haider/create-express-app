class HomeController {
  static index(req, res) {
    res.send(`
      <h1>Expess</h1>
      <p>Welcome to Express</p>
    `);
  }
}

module.exports = HomeController;
