const http = require("http"); // it provide by nodejs
const { adding, subtraction, multi } = require("./sum");// require
const port = 8080;

// const {adding} = require("./sum")
//core modules , local modules , third party modules
//core modules //Node.js includes a set of built-in modules, known as core modules
//http
//fs
//path
//local modules  are custom modules which is created by user

// npm node package manager => third party modules //Third-party modules in Node.js are reusable code packages developed and maintained by the Node.js
// nodemon
// express
// mongoose
// jwt
//

const server = http.createServer((req, res) => {
  return res.end("hello from javascript");
});

server.listen(port, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  console.log(adding(12, 5));
  console.log(subtraction(15, 5));
  console.log(multi(12, 2));
  console.log("server is running ", port);
});
