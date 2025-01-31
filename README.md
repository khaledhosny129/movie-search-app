# Movie Search Application

A full-stack application for searching and managing favorite movies built with React (Frontend) and NestJS (Backend).

## Project Structure

- `/frontend` - React TypeScript application
- `/backend` - NestJS application with PostgreSQL

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- OMDB API key

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Update .env with your credentials:

```plaintext
DATABASE_URL="postgresql://username:password@localhost:5432/movie_db"
OMDB_API_KEY="your_omdb_api_key"
PORT=3000
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Start the backend server:

```bash
npm run start:dev
```

The backend will be running on http://localhost:3000

### Frontend Setup

1. Navigate to frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend application:

```bash
npm start
```

The frontend will be running on http://localhost:3001

## Features

- Search movies using OMDB API
- Add/Remove movies to favorites
- View favorite movies list
- Responsive design using Material-UI
- RESTful API with Swagger documentation

## API Documentation

Once the backend is running, visit http://localhost:3000/api for Swagger documentation.

## Testing

### Backend Tests

```bash
cd backend
npm run test        # Unit tests
npm run test:e2e    # E2E tests
```

### Frontend Tests

```bash
cd frontend
npm test
```

## Technologies Used

### Frontend

- React with TypeScript
- Material-UI
- Axios
- React Router

### Backend

- NestJS
- PostgreSQL with Prisma
- Swagger/OpenAPI
- Class Validator

## Project Structure

```plaintext
movie-search-app/
├── frontend/           # React application
│   ├── src/
│   ├── public/
│   └── package.json
│
└── backend/            # NestJS application
    ├── src/
    ├── prisma/
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
