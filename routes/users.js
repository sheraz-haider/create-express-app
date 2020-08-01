const express = require('express');
const router = express.Router();

// Using Callback
router.get('/', (req, res) => {
  res.send('respond with a resource')
});

module.exports = router;