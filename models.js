const fs = require('fs/promises');

const fetchOwnerByID = (id) => {
    return fs.readFile(__dirname + `/data/owners/${id}.json`, 'utf8')
     .then((ownerString) => {
       return JSON.parse(ownerString);
})
}

const fetchOwners = () => {
     return fs.readdir("./data/owners")
.then((dataOwners) => {
  const myOwner = dataOwners.map((file) => {
    return fs.readFile(`./data/owners/${file}`, "utf8"); //all files content (async)
  });
  return Promise.all(myOwner); //return all promisses from each file
})
}
module.exports = { fetchOwnerByID, fetchOwners };