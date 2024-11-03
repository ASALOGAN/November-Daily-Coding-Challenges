## **Exploring Mongoose with MongoDB Atlas**

This guide will walk you through setting up a Node.js application connected to MongoDB Atlas using Mongoose. You'll learn how to perform CRUD operations and understand Mongoose's capabilities.

## **Project Structure**

```
mongodb-demo/
├── config/
│   └── db.js           # Database connection setup
├── controllers/
│   └── userController.js  # CRUD logic for User
├── models/
│   └── User.js           # Mongoose schema and model for User
├── routes/
│   └── userRoutes.js     # Routes for handling User CRUD operations
├── .env                  # Environment variables
├── .gitignore            # Ignore node_modules and .env file
├── package.json          # Project metadata and dependencies
└── server.js             # Entry point for the Node.js application
```

