## How to Test CRUD Operations on Postman

To test the CRUD operations for the User model using Postman, follow these steps:

### 1. Create a New User (POST)

- **Method**: POST
- **URL**: `http://localhost:5000/api/users`
- **Headers**: 
  - Content-Type: application/json
- **Body** (raw JSON):
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Expected Response**:
  - **Status Code**: 201 Created
  - **Body**: JSON object of the created user with an `_id` field.

### 2. Retrieve All Users (GET)

- **Method**: GET
- **URL**: `http://localhost:5000/api/users`
- **Expected Response**:
  - **Status Code**: 200 OK
  - **Body**: Array of user objects.

### 3. Retrieve a User by ID (GET)

- **Method**: GET
- **URL**: `http://localhost:5000/api/users/<user-id>`
- **Expected Response**:
  - **Status Code**: 200 OK
  - **Body**: JSON object of the user with the specified ID.
  - **If User Not Found**: 
    - **Status Code**: 404 Not Found
    - **Body**: `{ "message": "User not found" }`

### 4. Update a User by ID (PUT)

- **Method**: PUT
- **URL**: `http://localhost:5000/api/users/<user-id>`
- **Headers**: 
  - Content-Type: application/json
- **Body** (raw JSON):
  ```json
  {
    "name": "Jane Doe"
  }
  ```
- **Expected Response**:
  - **Status Code**: 200 OK
  - **Body**: JSON object of the updated user.

### 5. Delete a User by ID (DELETE)

- **Method**: DELETE
- **URL**: `http://localhost:5000/api/users/<user-id>`
- **Expected Response**:
  - **Status Code**: 200 OK
  - **Body**: JSON object of the deleted user.
  - **If User Not Found**: 
    - **Status Code**: 404 Not Found
    - **Body**: `{ "message": "User not found" }`

### Notes

- Replace `<your-server-url>` with the actual URL where your server is running.
- Replace `<user-id>` with the actual ID of the user you want to retrieve, update, or delete.
- Ensure your server is running and connected to the database before testing with Postman.
