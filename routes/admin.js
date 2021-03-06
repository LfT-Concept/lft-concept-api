const express = require('express');
const router = new express.Router();

const adminUsersRoutes = require('./admin-users');

router.use('/admin', (req, res, next) => {
  console.log('Authenticate admin');
  next();
});

router.use(adminUsersRoutes);

router.get('/admin/', (req, res, next) => {
  console.log('Get admin index page');
  res.send('<h1>This is admin section</h1>');
});

router.use('/', (req, res, next) => {
  console.log('Finish admin section');
  next();
});

module.exports = router;
