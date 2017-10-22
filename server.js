const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/weconnect', function () {
    console.log('WeConnect connection established!!!');
});


app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(8000, function () {
    console.log('yo yo yo, on 8000!!');
});