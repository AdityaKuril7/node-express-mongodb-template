# Node Express Mongo Template

A starter template for building REST APIs with Node.js, Express, MongoDB (Mongoose), JWT authentication, and Zod validation — written in TypeScript.

## Features

- Express 5 REST API setup
- MongoDB via Mongoose
- JWT-based authentication (signup/login)
- Password hashing with bcrypt
- Request validation using Zod
- Centralized error handling middleware
- Async error handling wrapper
- Standardized API response format

## Tech Stack

| Layer          | Technology       |
|----------------|-----------------|
| Runtime        | Node.js (tsx)   |
| Framework      | Express 5       |
| Database       | MongoDB + Mongoose |
| Auth           | JWT + bcrypt    |
| Validation     | Zod             |
| Language       | TypeScript      |

## Folder Structure

```
src/
├── controller/
│   └── auth.controller.ts     # Handles signup/login logic
├── lib/
│   └── db.ts                  # MongoDB connection setup
├── middleware/
│   └── error.middleware.ts    # Centralized error handler
├── model/
│   └── user.model.ts          # Mongoose User schema
├── routes/
│   └── auth.route.ts          # Auth route definitions
├── utils/
│   ├── asyncHandler.ts        # Wraps async route handlers
│   └── responseHandler.ts     # Standardized success/error responses
├── validations/
│   └── auth.validation.ts     # Zod schemas for auth input
└── index.ts                   # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB running locally or via Docker (see below)

### Installation

Use [degit](https://github.com/Rich-Harris/degit) to clone this template without git history:

```bash
npx degit AdityaKuril7/node-express-mongo-template my-new-project
cd my-new-project
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

### Run MongoDB (via Docker)

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongo-data:/data/db \
  mongo:latest
```

### Run the Dev Server

```bash
npm run dev
```

Server starts on the port defined in `.env` (default: `5000`).

## API Routes

### Auth

| Method | Endpoint            | Description         |
|--------|----------------------|----------------------|
| POST   | `/api/auth/signup`   | Register a new user |
| POST   | `/api/auth/login`    | Log in and get a JWT token |

**Signup — Request Body**
```json
{
  "username": "RamPatil",
  "email": "rampatil@gmail.com",
  "password": "yourpassword"
}
```

**Signup — Response**
```json
{
  "user": {
    "username": "RamPatil",
    "email": "rampatil@gmail.com",
    "_id": "6aa19e53dd2d4d409060644a",
    "createdAt": "2026-09-09T17:58:43.057Z",
    "updatedAt": "2026-09-09T17:58:43.057Z",
    "__v": 0
  },
  "message": "User created successfully"
}
```

**Login — Request Body**
```json
{
  "email": "rampatil@gmail.com",
  "password": "yourpassword"
}
```

**Login — Response**
```json
{
  "message": "Login successfully"
}
```

## Using This as a Template

1. Click **"Use this template"** on GitHub to generate a new repo from this one.
2. Clone your new repo.
3. Run `npm install`, set up `.env`, and start building on top of the existing auth setup.

## License

MIT