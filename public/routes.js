const router = require('express').Router();
const fs = require('fs').promises;
const uuid = require('uuid');

async function getNotes() {
  const data = await fs.readFile('./db/db.json', 'utf8');
  return JSON.parse(data);
}

router.get('/notes', async (req, res) => {
  const notes = await getNotes();

  res.json(notes);
})

router.post('/notes', async (req, res) => {
  const notes = await getNotes();

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
