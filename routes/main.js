const express = require('express');
const router = express.Router();
const HomeController = require('../app/Controllers/HomeController');

// Using controller method as callback
router.get('/', HomeController.index);

module.exports = router;