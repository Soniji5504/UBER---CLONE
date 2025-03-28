<<<<<<< Tabnine <<<<<<<
<!--//+
## Function: i//+
//+
### Description//+
The function `i` is a placeholder or marker used within the markdown document. It does not perform any operations or computations.//+
//+
### Parameters//+
- None//+
//+
### Returns//+
- None//+
-->//+
i
>>>>>>> Tabnine >>>>>>>// {"conversationId":"1b856430-28dd-4020-bb88-3fc0ddc530d1","source":"instruct"}on

This document provides details on the backend API endpoints for user authentication, login, logout, profile management, and captain-related operations.

## Table of Contents
- [Users](#users)
  - [Register](#register)
  - [Login](#login)
  - [Profile](#profile)
  - [Logout](#logout)
- [Captains](#captains)
  - [Register](#register-1)
  - [Login](#login-1)
  - [Profile](#profile-1)
  - [Logout](#logout-1)

## Users

### Register
- **URL:** `/users/register`
- **Method:** `POST`
- **Description:** Registers a new user by creating a user account with the provided information.
- **Request Body:**
    ```json
    {
        "fullname": {
            "firstname": "string (required, min 3 characters)",
            "lastname": "string (optional, min 3 characters)"
        },
        "email": "string (required, valid email)",
        "password": "string (required, min 6 characters)"
    }
    ```
- **Example Response:**
    ```json
    {
        "user": {
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "password": "string"
        },
        "token": "string"
    }
    ```

### Login
- **URL:** `/users/login`
- **Method:** `POST`
- **Description:** Authenticates a user using their email and password, returning a JWT token upon successful login.
- **Request Body:**
    ```json
    {
        "email": "string (required, valid email)",
        "password": "string (required, min 6 characters)"
    }
    ```
- **Example Response:**
    ```json
    {
        "user": {
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "password": "string"
        },
        "token": "string"
    }
    ```

### Profile
- **URL:** `/users/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile information of the currently authenticated user.
- **Authentication:** Requires a valid JWT token in the Authorization header: `Authorization: Bearer <token>`
- **Example Response:**
    ```json
    {
        "user": {
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string"
        }
    }
    ```

### Logout
- **URL:** `/users/logout`
- **Method:** `GET`
- **Description:** Logs out the current user and blacklists the token provided in the cookie or headers.
- **Authentication:** Requires a valid JWT token in the Authorization header or cookie.
- **Example Response:**
    ```json
    {
        "message": "Logout successful"
    }
    ```

## Captains

### Register
- **URL:** `/captains/register`
- **Method:** `POST`
- **Description:** Registers a new captain by creating a captain account with the provided information.
- **Request Body:**
    ```json
    {
        "fullname": {
            "firstname": "string (required, min 3 characters)",
            "lastname": "string (optional, min 3 characters)"
        },
        "email": "string (required, valid email)",
        "password": "string (required, min 6 characters)",
        "vehicle": {
            "color": "string (required, min 3 characters)",
            "plate": "string (required, min 3 characters)",
            "capacity": "number (required, min 1)",
            "vehicleType": "string (required, must be 'car', 'motorcycle', or 'auto')"
        }
    }
    ```
- **Example Response:**
    ```json
    {
        "captain": {
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "password": "string",
            "vehicle": {
                "color": "string",
                "plate": "string",
                "capacity": "number",
                "vehicleType": "string"
            }
        },
        "token": "string"
    }
    ```

### Login
- **URL:** `/captains/login`
- **Method:** `POST`
- **Description:** Authenticates a captain using their email and password, returning a JWT token upon successful login.
- **Request Body:**
    ```json
    {
        "email": "string (required, valid email)",
        "password": "string (required, min 6 characters)"
    }
    ```
- **Example Response:**
    ```json
    {
        "captain": {
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "password": "string",
            "vehicle": {
                "color": "string",
                "plate": "string",
                "capacity": "number",
                "vehicleType": "string"
            }
        },
        "token": "string"
    }
    ```

### Profile
- **URL:** `/captains/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile information of the currently authenticated captain.
- **Authentication:** Requires a valid JWT token in the Authorization header: `Authorization: Bearer <token>`
- **Example Response:**
    ```json
    {
        "captain": {
            "fullname": {
                "firstname": "string",
                "lastname": "string"
            },
            "email": "string",
            "vehicle": {
                "color": "string",
                "plate": "string",
                "capacity": "number",
                "vehicleType": "string"
            }
        }
    }
    ```

### Logout
- **URL:** `/captains/logout`
- **Method:** `GET`
- **Description:** Logs out the current captain and blacklists the token provided in the cookie or headers.
- **Authentication:** Requires a valid JWT token in the Authorization header or cookie.
- **Example Response:**
    ```json
    {
        "message": "Logout successful"
    }
    ```

i