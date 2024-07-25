# Note-Taking API
A powerful Express server that allows to perform CRUD operations on notes through various endpoints. This server offers a range of features to enhance efficiency, scalability, and security. Here's a breakdown of the key components:

## Features
- Secure endpoints with JWT tokens for authentication.
- Redis integration for efficient note storage and retrieval.
- Docker support for easy server deployment.
- Cluster module for improved scalability.
- AWS S3 integration for secure media storage with presigned URLs.
- MongoDB as the database for data persistence.

## Directory Structure
The project follows a specific directory structure, which includes the following key directories and files:

```
.
├── ConnecttoMongoDB
│   └── Connection.js
├── Controller
│   ├── Note_Controller.js
│   └── UserAuthentication_Controller.js
├── Dockerfile
├── MiddleWare
│   ├── Authorize.js
│   └── ClearCache.js
├── README.md
├── Router
│   ├── AuthRouter.js
│   └── NoteRouter.js
├── Schema
│   ├── Schema.js
│   └── Username_Password.js
├── Server.js
├── Services
│   ├── cache.js
│   └── uploads2S3.js
├── config
│   ├── ci.js
│   ├── dev.js
│   └── keys.js
├── package-lock.json
├── package.json
└── tests
    └── server.test.js
```

## Usage Instructions
To use this API, follow these steps:

1. Clone the repository to your local machine.
2. Set the following environment variables:
    - `PORT`: The port number for the server.
    - `MONGOURL`: The MongoDB connection URL.
    - `JWT_EXPIRES_IN`: The expiration time for JSON Web Tokens (JWT).
    - `JWT_SECRET_KEY`: The secret key for JWT encryption.

For detailed information on how to use this API, please refer to the [Postman Documentation](https://documenter.getpostman.com/view/24259607/2s9YsFDZ5F).

