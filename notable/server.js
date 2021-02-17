const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true}));

require('./app/routes')(app, {});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

