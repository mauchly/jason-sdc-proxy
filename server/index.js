const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fullPath = '/home/ubuntu/jason-sdc-proxy/client/public/index.html';
const path = require('path');
const loaderioFile = require('../loaderio-4deae93abd54e337b154b38197381d25.txt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(__dirname + '/../public'));
app.use('/:id', express.static(__dirname + '/../public/index.html'));

app.get('loaderio-4deae93abd54e337b154b38197381d25', (req, res) => {
  res.send(loaderioFile);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});