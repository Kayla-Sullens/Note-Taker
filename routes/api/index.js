let data = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req,res) => {
    res.json(data)
});

router.post('/notes', (req, res) => {
    res.json(data)
  });

module.exports = router;