//require to get functionality of a given package. comma seperates const variables. ie const http, server.
// Http defines how to communicate.
// Requesting service of HTTP accessed by variable http

const http = require("http"),
// A server that will be created from a the HTTP package.
  server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello world");
    // If you dont end, browser continues listening.
    response.end();
  });
// send communication to a specific port on server.
server.listen(3000, () => {
  console.log("Node server created at port 3000");
});
