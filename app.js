const http = require('http');
const path = require('path');

const testPage = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
    </head>
    <body>
      <h1>browser test</h1>
      <script>console.log('you can serve up scripts with this')</script>
    </body>
  </html>
`;

const server = http.createServer((req, res) => {
  res.end(testPage);
});

server.listen(3000);


// just hold on to this for a moment
// if (req.url === path.normalize('/')) {
//   res.end('This connection is alive!');
// } else if (req.url === path.normalize('/test')) {
//   res.end(testPage);
// } else {
//   res.writeHead(404, { 'Content-Type': 'text/plain' });
//   res.end("this page doesn't exist");
// }
