# Project Document for TODO List CRUD Application Using MERN Stack

This document provides an overview of a simple TODO List application built using the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure
```
CRUD_Application/
│
├── TO-DO-LIST-APP/                   # Main project directory
│   │
│   ├── backend/                      # Backend code
│   │   ├── models/                   # Mongoose models
│   │   │   └── Todo.js
│   │   ├── routes/                   # Express routes
│   │   │   └── todos.js
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