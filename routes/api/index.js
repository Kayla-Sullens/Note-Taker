const router = require('express').Router();
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

const getData = () => {
  const data = fs.readFileSync('db/db.json', {encoding: "utf8"});
  return JSON.parse(data);
}

router.get('/notes', (req, res) => {
  const data = getData();
  res.json(data);
});

router.post('/notes', (req, res) => {
  const data = getData();
  const { title, text } = req.body;
  const newNote = { title, text, id: generateUniqueId() };
  data.push(newNote);
  fs.writeFile('db/db.json', JSON.stringify(data), (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(newNote);
    }
  });
});

// use an array, pull in data, and write file again
// router.delete('/notes/:id', async (req, res) => {
//   const deleteNote = req.params
//   data = await deleteNote(id, data);
//   res.json(data);
// });

module.exports = router;