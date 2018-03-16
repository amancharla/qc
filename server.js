const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
let data1;
// Database Name
const dbName = 'test';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log('Did not work....');
    throw err;
  }

  console.log('Connected successfully to server');

  const db = client.db(dbName);

  db
    .collection('deals')
    .find()
    .toArray()
    .then((data) => {
      console.log(data);
      data1 = JSON.stringify(data);
    });
//data1 = data;
});

const http = require('http');

 const requestListener = (req, res) => {
   res.write(data1);
   res.end();
 };

 const server = http.createServer(requestListener);

 server.listen(8887, () => {
   console.info('Server is running..');
 });
