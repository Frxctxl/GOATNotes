const express = require('express');
const path = require('path');

const app = express();

// app.use('/api', require('./public/routes'));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(3333);
