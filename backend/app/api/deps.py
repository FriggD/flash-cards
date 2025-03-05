from typing import Generator

from app.database import db

async def get_db() -> Generator:
    try:
        yield db.db
    finally:
        # Connection is handled by FastAPI lifecycle
        pass