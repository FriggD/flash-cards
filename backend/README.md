# Flash Cards Backend

This is the backend service for the Flash Cards Platform, built with FastAPI and MongoDB.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the values as needed

4. Run the development server:
```bash
uvicorn app.main:app --reload
```

## Docker Setup

Build and run with Docker:
```bash
docker build -t flashcards-backend .
docker run -p 8000:8000 flashcards-backend
```

Or use docker-compose:
```bash
docker-compose up
```

## Testing

Run tests with:
```bash
pytest
```

## API Documentation

Once the server is running, visit:
- OpenAPI documentation: http://localhost:8000/docs
- ReDoc documentation: http://localhost:8000/redoc