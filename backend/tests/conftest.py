import asyncio
import pytest
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.testclient import TestClient
from app.main import app
from app.database import db

@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.get_event_loop()
    yield loop
    loop.close()

@pytest.fixture
async def test_client():
    client = TestClient(app)
    yield client

@pytest.fixture
async def test_db():
    test_client = AsyncIOMotorClient("mongodb://admin:password@localhost:27017/")
    db.client = test_client
    db.db = test_client["test_flashcards"]
    yield db.db
    await test_client.drop_database("test_flashcards")
    test_client.close()