# CRUD Operations with Express.js

This project demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Express.js and MongoDB. The project covers everything from initializing a new project, installing necessary npm packages, setting up a MongoDB database, creating a folder structure, defining a Mongoose schema, and implementing routes for POST, GET, UPDATE, and DELETE operations. By the end of this tutorial, you will have a fully functional REST API built with Express.js and MongoDB.

## Features

- Initialize a new Node.js project
- Install essential npm packages
- Connect to a MongoDB database using Mongoose
- Create a structured folder layout
- Define Mongoose models and schemas
- Implement RESTful routes for CRUD operations
- Add, retrieve, update, and delete data in the MongoDB database

## Steps

- **Introduction to CRUD using Express.js**: Brief overview of what CRUD operations are and how we'll use Express.js to implement them.

- **Initialize project**: Initialize a new Node.js project with a `package.json` file.

- **Install npm packages**: Install necessary npm packages like `express`, `mongoose`, and `body-parser`.

- **Connect mongoDB database with Express.js**: Establish a connection between Express.js and MongoDB using Mongoose.

- **Create Folder structure**: Organize your project directory by creating folders for models, routes, and controllers.

- **Create user model / schema**: Define a Mongoose schema and model for the user.

- **POST data into mongoDB Database**: Create a route to add new users to the database.

- **GET data from mongoDB Database**: Create a route to retrieve all users from the database.

- **UPDATE data from mongoDB Database**: Create a route to update a specific user's data.

- **DELETE data from mongoDB Database**: Create a route to delete a specific user from the database.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies.
4. Start the server.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js and npm
- MongoDB

## Project Structure

The project structure is organized with separate folders for models, routes, and controllers to keep the code modular and maintainable.

## API Endpoints

- **POST /users**: Add a new user to the database.
- **GET /users**: Retrieve all users from the database.
- **PUT /users/:id**: Update a specific user's data.
- **DELETE /users/:id**: Delete a specific user from the database.

## Conclusion

To build a basic CRUD application using Express.js and MongoDB. This project serves as a foundation for more complex applications and helps you understand the core concepts of building RESTful APIs.

Happy coding! 🎉
