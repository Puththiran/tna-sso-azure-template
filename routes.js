const express = require('express');

const router = express.Router();

// route to our app
router.get('/', (req, res) => {
  res.render('pages/home');
});

module.exports = router;
