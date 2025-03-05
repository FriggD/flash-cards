# API Documentation Guide

The Flash Cards API comes with built-in interactive API documentation powered by Swagger UI (OpenAPI).

## Accessing the Documentation

You can access the interactive API documentation in two ways:

1. **Swagger UI**: Visit `/docs` endpoint
   - Go to `http://localhost:8000/docs` (or your deployed API URL)
   - This provides an interactive interface where you can:
     - Read detailed API documentation
     - Try out API endpoints directly
     - View request/response schemas
     - See available parameters and their descriptions

2. **ReDoc**: Visit `/redoc` endpoint
   - Go to `http://localhost:8000/redoc`
   - This provides an alternative documentation view that is:
     - More readable for complex APIs
     - Better for printing
     - Includes right-hand sidebar navigation

## Documentation Features

The API documentation includes:

- Detailed endpoint descriptions
- Request/response schemas
- Authentication information
- Available query parameters
- Response codes and their meanings
- Example requests and responses

## Models

All data models are fully documented with their properties and constraints:

- FlashCard
- FlashCardCreate
- FlashCardUpdate

## Authentication

The API uses API key authentication. Include your API key in the request headers as specified in the documentation.

## Testing Endpoints

Using Swagger UI (`/docs`), you can:

1. Click on any endpoint to expand it
2. Click "Try it out"
3. Fill in any required parameters
4. Execute the request
5. See the response directly in the browser

## OpenAPI Specification

The raw OpenAPI specification is available at `/openapi.json`, which can be used to:
- Generate client libraries
- Import into other API tools
- Integrate with your own documentation system