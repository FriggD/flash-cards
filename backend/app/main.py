from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.database import init_db

app = FastAPI(
    title="Flash Cards API",
    description="API for Flash Cards Platform",
    version="1.0.0"
)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    await init_db()

@app.on_event("shutdown")
async def shutdown_db_client():
    # Add cleanup code here if needed
    pass

# Import and include routers
from app.api.v1.router import api_router
app.include_router(api_router, prefix="/api/v1")