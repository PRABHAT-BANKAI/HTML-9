const http = require("http");
const port = 8081;

const server = http.createServer((req, res) => {
  return res.end("hello world ");
});

server.listen(port, (error) => {
  if (error) {
    console.log("server is not running", error);
    return;
  }
  console.log("server is running",port);
});
