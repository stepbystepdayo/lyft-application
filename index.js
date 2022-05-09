const http = require("http");
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Everyone!\n");
  })
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
