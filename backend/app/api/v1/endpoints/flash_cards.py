from typing import List
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.api.deps import get_db
from app.models.flash_card import FlashCard, FlashCardCreate, FlashCardUpdate
from app.core.exceptions import NotFoundException

router = APIRouter(
    prefix="/flash-cards",
    tags=["flash-cards"]
)

@router.get("/", response_model=List[FlashCard])
async def get_flash_cards(
    skip: int = 0,
    limit: int = 100,
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """
    Retrieve a list of flash cards.
    
    Parameters:
    - skip: Number of records to skip (pagination)
    - limit: Maximum number of records to return
    
    Returns:
    - List of flash cards
    """
    flash_cards = await db.flash_cards.find().skip(skip).limit(limit).to_list(length=limit)
    return flash_cards

@router.post("/", response_model=FlashCard, status_code=status.HTTP_201_CREATED)
async def create_flash_card(
    flash_card: FlashCardCreate,
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """
    Create a new flash card.
    
    Parameters:
    - flash_card: Flash card data (question, answer, tags)
    
    Returns:
    - Created flash card object with generated ID
    
    Raises:
    - 422 Validation Error: If the request body is invalid
    """
    new_flash_card = flash_card.dict()
    result = await db.flash_cards.insert_one(new_flash_card)
    created_flash_card = await db.flash_cards.find_one({"_id": result.inserted_id})
    return created_flash_card

@router.get("/{flash_card_id}", response_model=FlashCard)
async def get_flash_card(
    flash_card_id: UUID,
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """
    Retrieve a specific flash card by its ID.
    
    Parameters:
    - flash_card_id: UUID of the flash card to retrieve
    
    Returns:
    - Flash card object matching the ID
    
    Raises:
    - 404 Not Found: If the flash card doesn't exist
    """
    """
    Get flash card by ID.
    """
    if flash_card := await db.flash_cards.find_one({"_id": flash_card_id}):
        return flash_card
    raise NotFoundException(f"Flash card {flash_card_id} not found")