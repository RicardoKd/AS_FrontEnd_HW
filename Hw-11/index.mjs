import http from "http";

// const host = 'localhost';
// const port = 3000;

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end("My first server!");
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });

http
  .createServer((req, res) => {
    console.log("req");
    res.end("hello world");
  })
  .listen(3000);
