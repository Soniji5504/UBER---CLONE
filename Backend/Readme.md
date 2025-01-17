# UBER Clone Backend

## API Documentation

### User Registration

**Endpoint:** `POST /api/register`

**Description:** Registers a new user.

**Request Body:**
```json
{
    "username": "string",
    "email": "string",
    "password": "string"
}
```

**Response:**
- **201 Created**
    ```json
    {
        "message": "User registered successfully",
        "userId": "string"
    }
    ```
- **400 Bad Request**
    ```json
    {
        "error": "string"
    }
    ```

### User Login

**Endpoint:** `POST /api/login`

**Description:** Authenticates a user and returns a token.

**Request Body:**
```json
{
    "email": "string",
    "password": "string"
}
```

**Response:**
- **200 OK**
    ```json
    {
        "message": "Login successful",
        "token": "string"
    }
    ```
- **401 Unauthorized**
    ```json
    {
        "error": "Invalid credentials"
    }
    ```

### User Profile

**Endpoint:** `GET /api/profile`

**Description:** Retrieves the profile of the authenticated user.

**Headers:**
```json
{
    "Authorization": "Bearer <token>"
}
```

**Response:**
- **200 OK**
    ```json
    {
        "username": "string",
        "email": "string",
        "createdAt": "string"
    }
    ```
- **401 Unauthorized**
    ```json
    {
        "error": "Unauthorized"
    }
    ```

### User Logout

**Endpoint:** `POST /api/logout`

**Description:** Logs out the authenticated user.

**Headers:**
```json
{
    "Authorization": "Bearer <token>"
}
```

**Response:**
- **200 OK**
    ```json
    {
        "message": "Logout successful"
    }
    ```
- **401 Unauthorized**
    ```json
    {
        "error": "Unauthorized"
    }
    ```

### Important Notes

- Ensure to include the `Authorization` header with the token for endpoints that require authentication.
- Passwords should be stored securely using hashing algorithms.
- Validate all input data to prevent security vulnerabilities.
