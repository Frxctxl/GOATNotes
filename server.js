const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();

const routes = require('./public/routes');
app.use(express.urlencoded({ extended: true }))
app.use(bp.json());

app.use(express.static('./public'))
app.use('/api', routes);

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(3333);
