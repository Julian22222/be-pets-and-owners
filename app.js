const express = require("express");
const app = express();
const fs = require("fs/promises");

app.get("/api", (request, response) => {
  response.status(200).send({ msg: "well done" });
});

app.get("/api/owners", (request, response) => {
  fs.readdir("./data/owners")
    .then((dataOwners) => {
      const myOwner = dataOwners.map((file) => {
        return fs.readFile(`./data/owners/${file}`, "utf8"); //all files content (async)
      });
      return Promise.all(myOwner); //return all promisses from each file
    })
    .then((owners) => {
      console.log(owners);
      const parsedOwners = owners.map((owner) => JSON.parse(owner)); // parse ???
      response.status(200).send({ owners: parsedOwners });
    })
    .catch((err) => {
      console.log("error");
    });
});

app.get(`/api/owners/:id`, (request, response) => {
 const { id } = request.params;
  fs.readFile(__dirname + `/data/owners/${id}.json`, 'utf8')
  .then((ownerString) => {
    const owner = JSON.parse(ownerString);
    response.status(200).send({ owner });
  })
});
app.listen(9060, () => {
  console.log("app is listening on port 9060");
});
