const http = require('http');

const requestlistner = (req, res) => {
  res.write("Hello Node");
  res.end();
}
const server = http.createServer(requestlistner);

// server = http.createServer(requestListner);

server.listen(8888, () =>  { console.log("server is running ..");
  })
