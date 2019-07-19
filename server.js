const express = require('express');
const bodyParser = require('body-parser');
app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',require('./router'))

app.listen(8000);