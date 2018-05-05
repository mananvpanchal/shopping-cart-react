const data = require('./data.js');
const express = require('express')
const app = express()

app.get('/list', (req, res) => res.send(data))

app.listen(4000, () => console.log('Server listening on port 4000!'))