const express = require("express");
const app = express();
const fs = require("fs/promises");
const { getOwners } = require('./controllers.js');
const { getOwnerbyId } = require('./controllers.js');

app.get("/api", (request, response) => {
  response.status(200).send({ msg: "well done" });
});

app.get("/api/owners", getOwners);

app.get(`/api/owners/:id`, getOwnerbyId);

module.exports = app 