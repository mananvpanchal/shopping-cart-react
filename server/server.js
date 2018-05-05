const data = require('./data.js');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

//app.use(cors());

app.get('/list', (req, res) => res.send(data));

app.listen(5000, () => {
    console.log('Server listening on port 5000!');
});