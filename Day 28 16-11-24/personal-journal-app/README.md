
# Personal Journal App - Backend Documentation

This document provides an overview of the backend architecture and setup for the Personal Journal App, which is built using the MERN stack (MongoDB, Express.js, React, Node.js). This section focuses on the backend components.

### Project Structure

```
personal-journal-app/
├── config/
│   └── database.js            # MongoDB connection setup
├── controllers/
│   ├── authController.js      # Logic for user authentication
│   ├── journalController.js   # Logic for journal operations
├── models/
│   ├── User.js                # User schema
│   └── Journal.js             # Journal schema
├── routes/
│   ├── auth.js                # Routes for authentication
│   └── journal.js             # Routes for journal CRUD operations
├── middleware/
│   └── authenticate.js        # Middleware for authentication
├── .env                       # Environment variables
├── .gitignore                 # Files and folders to ignore in Git
├── package.json               # Project metadata and dependencies
├── server.js                  # Entry point for the application
├── README.md                  # Project documentation
```

## Backend Overview

The backend of the Personal Journal App is responsible for handling data storage, retrieval, and management. It provides a RESTful API for the frontend to interact with, enabling users to create, read, update, and delete journal entries.

### Key Technologies

- **Node.js**: A JavaScript runtime used to build the server-side application.
- **Express.js**: A web application framework for Node.js, used to create the API endpoints.
- **MongoDB**: A NoSQL database used to store journal entries and user data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to define schemas and interact with the database.
- **JWT (JSON Web Token)**: Used for user authentication, allowing secure access to protected routes.

### API Endpoints

#### **User Authentication Routes**

- **POST /api/auth/register**: Register a new user.
    - **Request Body**: `{"email": "user@example.com", "password": "yourpassword"}`
    - **Response**: User data (without password) on success.

- **POST /api/auth/login**: Log in a user to obtain a JWT token.
    - **Request Body**: `{"email": "user@example.com", "password": "yourpassword"}`
    - **Response**: JWT token on successful login.

- **GET /api/auth/profile**: Retrieve the profile of the authenticated user.
    - **Headers**: `Authorization: Bearer <jwt_token>`
    - **Response**: User profile data (excluding password).

#### **Journal Entry Routes**

- **POST /api/journal/create**: Create a new journal entry.
    - **Headers**: `Authorization: Bearer <jwt_token>`
    - **Request Body**: `{"title": "Journal Title", "content": "Journal content"}`
    - **Response**: The created journal entry.

- **GET /api/journal**: Get all journal entries of the authenticated user.
    - **Headers**: `Authorization: Bearer <jwt_token>`
    - **Response**: List of journal entries.

- **GET /api/journal/:id**: Get a single journal entry by its ID.
    - **Headers**: `Authorization: Bearer <jwt_token>`
    - **Response**: The requested journal entry.

- **PUT /api/journal/:id**: Update an existing journal entry by ID.
    - **Headers**: `Authorization: Bearer <jwt_token>`
    - **Request Body**: `{"title": "Updated Title", "content": "Updated content"}`
    - **Response**: The updated journal entry.

- **DELETE /api/journal/:id**: Delete a journal entry by ID.
    - **Headers**: `Authorization: Bearer <jwt_token>`
    - **Response**: Success or error message.

### Running the Backend

1. **Install Dependencies**: Navigate to the `backend` directory and run `npm install` to install the required packages.

2. **Set Up Environment Variables**: Create a `.env` file in the `backend` directory with the necessary environment variables, such as `MONGO_URI` for the MongoDB connection string and `PORT` for the server port. `JWT_SECRET` a secret string for JWT signing.

3. **Start the Server**: Run `npm start` to start the Express server. The server will connect to the MongoDB database and listen for incoming requests on the specified port.

### Testing the API

To ensure the API is functioning correctly, you can use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to send HTTP requests to the server. Below are some example requests for testing the API endpoints:

#### User Authentication

1. **Register a New User**
   - **Endpoint**: `POST /api/auth/register`
   - **Request Body**:
     ```json
     {
       "firstName": "John",
       "lastName": "Doe",
       "userName": "johndoe",
       "email": "johndoe@example.com",
       "password": "yourpassword"
     }
     ```
   - **Expected Response**: User data (without password) on success.

2. **Log In a User**
   - **Endpoint**: `POST /api/auth/login`
   - **Request Body**:
     ```json
     {
       "emailOrUsername": "johndoe@example.com",
       "password": "yourpassword"
     }
     ```
   - **Expected Response**: JWT token on successful login.

3. **Get User Profile**
   - **Endpoint**: `GET /api/auth/profile`
   - **Headers**: `Authorization: Bearer <jwt_token>`
   - **Expected Response**: User profile data (excluding password).

#### Journal Entries

1. **Create a Journal Entry**
   - **Endpoint**: `POST /api/journal/create`
   - **Headers**: `Authorization: Bearer <jwt_token>`
   - **Request Body**:
     ```json
     {
       "title": "My First Journal",
       "content": "This is the content of my first journal entry."
     }
     ```
   - **Expected Response**: The created journal entry.

2. **Get All Journal Entries**
   - **Endpoint**: `GET /api/journal`
   - **Headers**: `Authorization: Bearer <jwt_token>`
   - **Expected Response**: List of journal entries.

3. **Get a Journal Entry by ID**
   - **Endpoint**: `GET /api/journal/:id`
   - **Headers**: `Authorization: Bearer <jwt_token>`
   - **Expected Response**: The requested journal entry.

4. **Update a Journal Entry**
   - **Endpoint**: `PUT /api/journal/:id`
   - **Headers**: `Authorization: Bearer <jwt_token>`
   - **Request Body**:
     ```json
     {
       "title": "Updated Journal Title",
       "content": "Updated content of the journal entry."
     }
     ```
   - **Expected Response**: The updated journal entry.

5. **Delete a Journal Entry**
   - **Endpoint**: `DELETE /api/journal/:id`
   - **Headers**: `Authorization: Bearer <jwt_token>`
   - **Expected Response**: Success or error message.

By following these steps, you can verify that each endpoint is working as expected and handling requests correctly. Make sure to replace `<jwt_token>` with the actual token received from the login response.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

