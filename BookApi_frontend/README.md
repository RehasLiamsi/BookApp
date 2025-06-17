# BookApp Frontend (Angular 18)

This is the frontend of the BookApp built with **Angular 18**. It includes a responsive UI, JWT login, dark/light mode, and favorite quotes.

## 🎯 Features

- Responsive CRUD interface for managing books
- JWT-based registration and login with token storage in localStorage
- Bootstrap 5 & Font Awesome icons
- Dark/Light theme toggle
- View with favorite quotes
- Environment-based API configuration

## 🧰 Technologies

- Angular 18 (standalone components)
- Bootstrap 5
- Font Awesome
- Angular Router
- Angular Forms

## 📦 Getting Started

### Prerequisites

- Node.js and npm
- Angular CLI

### Run Locally

```bash
cd BookApi_frontend
npm install
ng serve
```

Runs on: `http://localhost:4200`

Ensure the backend API is running on `https://localhost:5222` or change it in `src/environments/environment.ts`.

## 🏗️ Build for Production

```bash
ng build --configuration=production
```
