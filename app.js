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
  res.writeHead(200, {
    'Content-Length': body.length,
    'Content-Type': 'text/html'
  });
  res.write(body);
  res.end();
});

server.listen(3000, () => {
  console.log("listening on port 3000")
});
