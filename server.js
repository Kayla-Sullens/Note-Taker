// Dependencies
const express = require('express');
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use("/", routes);

//Working on getting the delete function to work
// app.delete('/api/notes/:id', (req, res) => {
//   const id = req.params;
//   return res.send();
// });

app.listen(PORT, () => {
    console.log(`API server now on http://localhost:${PORT}`);
  });