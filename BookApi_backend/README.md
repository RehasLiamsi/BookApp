# Book API Backend (.NET 8)

This is the backend REST API built with **.NET 8 (ASP.NET Core Web API)**. It supports full CRUD operations for books and includes JWT-based user authentication.

## 🚀 Features

- RESTful API with endpoints for books and authentication
- User registration and login with JWT token generation
- Protected routes using token validation
- CORS enabled for frontend integration
- Entity Framework Core with SQLite (or changeable DB)

## 🛠️ Technologies

- .NET 8
- ASP.NET Core
- Entity Framework Core
- JWT Authentication
- SQLite (or configurable)

## 📦 Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

### Run Locally

```bash
cd BookApi_backend
dotnet restore
dotnet ef database update
dotnet run
```

The API will start on: `https://localhost:5222`

## 🔐 API Security

- Use the `/api/auth/login` endpoint to obtain a JWT token
- Include the token in `Authorization` header for protected requests

```
Authorization: Bearer <your_token_here>
```

## 📁 Endpoints

- `GET /api/book`
- `POST /api/book`
- `PUT /api/book/{id}`
- `DELETE /api/book/{id}`
