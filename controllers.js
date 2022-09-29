const { response } = require('./app');
const { fetchOwnerByID, fetchOwners } = require('./models');
 

const getOwners = (request, response) => {
    fetchOwners() 
      .then((owners) => {
        console.log(owners);
        const parsedOwners = owners.map((owner) => JSON.parse(owner)); // parse ???
        response.status(200).send({ owners: parsedOwners });
      })
      .catch((err) => {
        console.log(err);
      });
  }

const getOwnerbyId = (request, response) => {
    const { id } = request.params;
     fetchOwnerByID(id)
     .then((owner) => {
         response.status(200).send({ owner });
      }).catch ((err) => {
        console.log(err);
     })
   }

module.exports = { getOwners, getOwnerbyId };