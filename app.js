const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head>
        <title>API Repsonse</title>
      </head>
      <body>
        <h1>API Response</h1>
      </body>
    </html>
  `);
  res.end();
});

server.listen(3000, () => {
  console.log("listening on port 3000")
});
