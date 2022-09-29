const express = require("express");
const app = express();
const fs = require("fs/promises");
const {
  getOwners,
  getOwnerbyId,
  getPetsById,
  getPets,
  updatedOwner,
} = require("./controllers.js");

app.get("/api", (request, response) => {
  response.status(200).send({ msg: "well done" });
});

app.get("/api/owners", getOwners);

app.get(`/api/owners/:id`, getOwnerbyId);

app.get(`/api/owners/:id/pets`, getPetsById);

app.get(`/api/pets`, getPets);

app.put(`/api/owners/:id`, updatedOwner);

module.exports = app;
