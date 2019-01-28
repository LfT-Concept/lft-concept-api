const express = require('express');
const router = express.Router();

router.get('/admin/users', (req, res, next) => {
  console.log('Get admin users page');
  res.send('<h1>Users (admin)</h1>')
});

module.exports = router;