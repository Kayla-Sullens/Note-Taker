let data = require('../../db/db.json');
const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
  res.json(data)
});


const generateUniqueId = require('generate-unique-id');

router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  req.body.id = generateUniqueId();
  const newNote = { title, text };
  data.push(newNote);
  fs.writeFile('../../db/db.json', JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(newNote);
    }
  });
});

router.delete('/notes', (req, res) => {
  const { title, text } = req.body;
  const deleteNote = { title, text };
  data.push(deleteNote);
  fs.writeFile('../../db/db.json', JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(deleteNote);
    }
  });
});

module.exports = router;