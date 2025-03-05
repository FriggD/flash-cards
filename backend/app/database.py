from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

class Database:
    client: AsyncIOMotorClient = None
    db = None

db = Database()

async def init_db():
    # Create global client
    db.client = AsyncIOMotorClient(settings.MONGODB_URL, uuidRepresentation="standard")
    db.db = db.client[settings.MONGODB_DB]

async def close_db():
    db.client.close()