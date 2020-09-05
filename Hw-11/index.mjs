import http from "http";
import fs from "fs";

http
  .createServer((request, response) => {
    if (request.method === "GET") {
      console.log(request.IncomingMessage);

      // console.log(JSON.parse(request));
      // fs.writeFileSync("./request.txt", `${IncomingMessage}`);
      response.writeHead(200);
      response.end("My first server!");
      return;
    }
    response.writeHead(404);
  })
  .listen(3000);
