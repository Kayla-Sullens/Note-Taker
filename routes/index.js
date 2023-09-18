const router = require('express').Router();
const path = require('path');

router.use('/api', require('./api'));

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})


module.exports = router;