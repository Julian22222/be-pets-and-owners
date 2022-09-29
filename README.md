# Pets and Owners

[Express.js](http://expressjs.com/) is a web application framework for Node.js. It is designed for building web applications and APIs.

[nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Remember to `npm init` before installing these two packages, and to setup your `.gitignore` file so that you don't commit your `node_modules`!

### Tools

1. [Insomnia](https://insomnia.rest/download/) to preview your requests

### Objectives

1. Learn how to get a simple web server up and running using express
2. Learn handling simple GET requests on your server
3. Learn to read queries from the request your sever receives
4. Learn to use the body of POST/PATCH requests

## Intro

This sprint will help you get used to express as well as recap over the use of the file system module.

## Tasks

Now you will need to create a new express server, In this sprint, we are going to create a fully functioning server that can handle the following requests:

- GET
- POST
- PATCH
- DELETE

All of these routes should start with `/api/` as we are creating an API. Make them restful!

Remember to use `nodemon` so that you do not have to keep manually restarting your express server!
Once `nodemon` is installed, add a script to your `package.json` to make use of it.

```json
"scripts": {
   "dev": "nodemon app.js"
}
```

To start your server, instead of running directly with node (`node app.js`) use your dev script `npm run dev`.

### Task 1

### Getting Owners

1. GET `/owners` - responds with an array containing the data of every owner (_hint: you will need to use [fs.readdir](https://www.geeksforgeeks.org/node-js-fs-promise-readdir-method) to read all of the file names in the owners folder_)
2. GET `/owners/:id` - responds with the relevant owner's data

### Task 2 Getting pets

1. GET `/owners/:id/pets` - responds with an array containing the data of all pets belonging to the relevant owner
2. GET `/pets` - responds with an array containing all of the pets' data. This endpoint should accept a query of `temperament` so that users can filter pets by their temperament, e.g. `GET /api/pets?temperament=grumpy` responds with an array containing all the pets with a `temperament` of `grumpy`

### Task 3 Updating Owners

_don't forget to use `express.json()` to access the request body! & think about what the endpoint for each of the below should be_

1. PATCH: update an owners name and age.
