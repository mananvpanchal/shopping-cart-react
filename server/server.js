const data = require('./data.js');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/list', (req, res) => res.send(data));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server listening on port '+port+'!');
});