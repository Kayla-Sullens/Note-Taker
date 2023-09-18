let data = require('../../db/db.json');
const router = require('express').Router();
const newNote = require('../../lib/notes');

router.get('/notes', (req,res) => {
    res.json(data)
});

module.exports = router;