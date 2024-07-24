const router = require('express').Router();
const fs = require('fs').promises;
const uuid = require('uuid');

router.get('/notes', async (req, res) => {

  const data = await fs.readFile('./db/db.json', 'utf8');
  res.json(JSON.parse(data));
})

router.post('/notes', async (req, res) => {
  const data = await fs.readFile('./db/db.json', 'utf8');
  const notes = JSON.parse(data);

  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid.v4()
  };

  notes.push(newNote);
  await fs.writeFile('./db/db.json', JSON.stringify(notes));

  res.send(newNote);

})

module.exports = router;
