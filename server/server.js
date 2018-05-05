const data = require('./data.js');
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'build')));

app.get('/list', (req, res) => res.send(data))

app.listen(5000, () => console.log('Server listening on port 5000!'))