// Dependencies
const fs = require('fs');
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const { notes } = require("");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });