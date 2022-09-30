const fs = require("fs/promises");

const fetchOwners = () => {
  return fs.readdir("./data/owners").then((dataOwners) => {
    const myOwner = dataOwners.map((file) => {
      return fs.readFile(`./data/owners/${file}`, "utf8"); //all files content (async)
    });
    return Promise.all(myOwner); //return all promisses from each file
  });
};

const fetchOwnerByID = (id) => {
  return fs
    .readFile(__dirname + `/data/owners/${id}.json`, "utf8")
    .then((ownerString) => {
      console.log(ownerString);
      return JSON.parse(ownerString);
    });
};

const fetchPetsById = (id) => {
  return fs
    .readdir(__dirname + `/data/pets/`, "utf8")
    .then((petString) => {
      // console.log(petString);
      const myPets = petString.map((file) => {
        return fs.readFile(`./data/pets/${file}`, "utf8");
      });
      // console.log(Promise.all(myPets));
      return Promise.all(myPets);
    })
    .then((data) => {
      const parsedPets = data.map((pet) => JSON.parse(pet));
      return parsedPets;
    });
};

const fetchPets = () => {
  return fs
    .readdir(__dirname + `/data/pets/`, "utf8")
    .then((petString) => {
      // console.log(petString);
      const myPets = petString.map((file) => {
        return fs.readFile(`./data/pets/${file}`, "utf8");
      });
      // console.log(Promise.all(myPets));
      return Promise.all(myPets);
    })
    .then((data) => {
      const parsedPets = data.map((pet) => JSON.parse(pet));
      return parsedPets;
    });
};

const changeOwnerById = (id) => {
  return fs.readFile(__dirname + `/data/owners/${id}.json`, "utf8")
    .then((ownerString) => {
      console.log(ownerString);
      return JSON.parse(ownerString);
    });
    
  // .then((ownerInfo) => {
  //   console.log(ownerInfo);
  // });
};

module.exports = {
  fetchOwnerByID,
  fetchOwners,
  fetchPetsById,
  fetchPets,
  changeOwnerById,
};
