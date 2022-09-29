const { response } = require("./app");
const {
  fetchOwnerByID,
  fetchOwners,
  fetchPetsById,
  fetchPets,
  changeOwnerById,
} = require("./models");

const getOwners = (request, response) => {
  fetchOwners()
    .then((owners) => {
      console.log(owners);
      const parsedOwners = owners.map((owner) => JSON.parse(owner));
      response.status(200).send({ owners: parsedOwners });
      // console.log(parsedOwners, " This is my request");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getOwnerbyId = (request, response) => {
  const { id } = request.params;
  fetchOwnerByID(id)
    .then((owner) => {
      response.status(200).send({ owner });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPetsById = (request, response) => {
  const { id } = request.params;
  fetchPetsById(id)
    .then((parsedPets) => {
      // console.log(parsedPets);
      const pets = parsedPets.filter((pet) => pet.owner === id);
      console.log(parsedPets[0].owner);
      response.status(200).send({ pets });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPets = (request, response) => {
  const { temperament } = request.query;
  console.log(request);

  fetchPets()
    .then((parsedPets) => {
      const pets = parsedPets.filter((pet) => pet.temperament === temperament);
      response.status(200).send({ pets });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updatedOwner = (request, response) => {
  const { id } = request.params;
  changeOwnerById(id)
    .then((parsedPets) => {
      response.status(200).send({ pets });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getOwners,
  getOwnerbyId,
  getPetsById,
  getPets,
  updatedOwner,
};
