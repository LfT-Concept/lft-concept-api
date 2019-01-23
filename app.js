const http = require('http');

const server = http.createServer((req, res) => {
  const body = `
    <html>
      <head>
        <title>API Repsonse</title>
      </head>
      <body>
        <h1>API Response</h1>
      </body>
    </html>
  `;
  res.setHeader('Content-Length', body.length);
  res.setHeader('Content-Type', 'text/html');
  res.status(200);
  res.write(body);
  res.end();
});

server.listen(3000, () => {
  console.log("listening on port 3000")
});
