const router = require('express').Router();
const uuid = require('uuid');

const { getNotes, writeNotes } = require('../db');

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
  await writeNotes(notes);

  res.send(newNote);
})

router.delete('/notes/:id', async (req, res) => {
  const notes = await getNotes();
  const newArr = notes.filter((note) => note.id !== req.params.id);

  await writeNotes(newArr);
  res.send();
})

module.exports = router;
