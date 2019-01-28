const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use("/", (req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);


// just hold on to this for a moment
// if (req.url === path.normalize('/')) {
//   res.end('This connection is alive!');
// } else if (req.url === path.normalize('/test')) {
//   res.end(testPage);
// } else {
//   res.writeHead(404, { 'Content-Type': 'text/plain' });
//   res.end("this page doesn't exist");
// }
