from typing import List
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.api.deps import get_db
from app.models.flash_card import FlashCard, FlashCardCreate, FlashCardUpdate
from app.core.exceptions import NotFoundException

router = APIRouter()

@router.get("/", response_model=List[FlashCard])
async def get_flash_cards(
    skip: int = 0,
    limit: int = 100,
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """
    Retrieve flash cards.
    """
    flash_cards = await db.flash_cards.find().skip(skip).limit(limit).to_list(length=limit)
    return flash_cards

@router.post("/", response_model=FlashCard, status_code=status.HTTP_201_CREATED)
async def create_flash_card(
    flash_card: FlashCardCreate,
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    """
    Create new flash card.
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
    Get flash card by ID.
    """
    if flash_card := await db.flash_cards.find_one({"_id": flash_card_id}):
        return flash_card
    raise NotFoundException(f"Flash card {flash_card_id} not found")