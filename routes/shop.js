const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
  console.log('Get shop page');
  res.send('<h1>Welcome to my shop</h1>');
});

module.exports = router;
