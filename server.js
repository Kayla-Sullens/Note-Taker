// Dependencies
const express = require('express');
const routes = require('./routes')

const app = express();
const PORT = 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`API server now on http://localhost:${PORT}`);
  });