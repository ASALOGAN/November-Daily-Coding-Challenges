# Project Document for TODO List CRUD Application Using MERN Stack

This document provides an overview of a simple TODO List application built using the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure
```
CRUD_Application/
│
├── TO-DO-LIST-APP/                   # Main project directory
│   │
│   ├── backend/                      # Backend code
│   │   ├── config/                   # Database configuration
│   │   │   └── db.js                 # Manage the MongoDB connection
│   │   ├── controllers/              # Logic for each route
│   │   │   └── taskController.js     # Handle Logic for API route
│   │   ├── models/                   # MongoDB schemas
│   │   │   └── Task.js               # Mongoose schema for a Task
│   │   ├── routes/                   # API routes
│   │   │   └── taskRoutes.js         # API Routes Endpoints for CRUD Operations.
│   │   ├── .env                      # Environment variables
│   │   ├── .gitignore                # Git ignore file
│   │   ├── package.json              # Node.js dependencies and scripts
│   │   └── server.js                 # Express server
│   │
│   ├── frontend/                     # Frontend code
│   │   ├── public/
│   │   │   ├── index.html
│   │   │   └── favicon.ico
│   │   └── src/
│   │       ├── components/
│   │       │   └── TodoList.js
│   │       ├── App.js
│   │       ├── index.js
│   │       └── App.css
│   │
│   └── README.md                     # Project documentation
```


## Backend Overview

The backend of this TODO List application is built using Node.js and Express, with MongoDB as the database. It provides a RESTful API for managing tasks, including creating, reading, updating, and deleting tasks.

### Key Components

- **Express Server**: The server is set up using Express, a minimal and flexible Node.js web application framework. It handles incoming HTTP requests and routes them to the appropriate handlers.

- **MongoDB and Mongoose**: MongoDB is used as the database to store task data. Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, providing a schema-based solution to model application data.

- **Environment Configuration**: The application uses the `dotenv` package to manage environment variables, such as database connection strings and server port numbers.

### Backend Structure

- **Config**: Contains configuration files, such as `db.js`, which manages the connection to the MongoDB database.

- **Controllers**: Contains logic for handling API requests. The `taskController.js` file includes functions to create, retrieve, update, and delete tasks.

- **Models**: Contains Mongoose schemas that define the structure of the data. The `Task.js` file defines the schema for a task, including fields like name, status, due date, priority, and tags.

- **Routes**: Defines API endpoints for CRUD operations on tasks. The `taskRoutes.js` file maps HTTP methods and paths to controller functions.

### API Endpoints

- **POST /api/tasks**: Create a new task.
- **GET /api/tasks**: Retrieve all tasks, with optional filtering by status, priority, or tags.
- **PUT /api/tasks/:id**: Update a task by its ID.
- **DELETE /api/tasks/:id**: Delete a task by its ID.

### Running the Backend

1. **Install Dependencies**: Navigate to the `backend` directory and run `npm install` to install the required packages.

2. **Set Up Environment Variables**: Create a `.env` file in the `backend` directory with the necessary environment variables, such as `MONGO_URI` for the MongoDB connection string and `PORT` for the server port.

3. **Start the Server**: Run `npm start` to start the Express server. The server will connect to the MongoDB database and listen for incoming requests on the specified port.

