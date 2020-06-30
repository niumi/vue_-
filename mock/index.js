const express = require('express');
const app = express();
const router = require('./router.js');
var debug = require('debug')('my-application');
var bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', router);
app.listen(3000, function () {
    debug('Express server listening on port ' + 3000);
});