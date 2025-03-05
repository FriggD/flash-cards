import pytest
from uuid import UUID, uuid4
from app.models.flash_card import FlashCard

@pytest.mark.asyncio
async def test_create_flash_card(test_client, test_db):
    flash_card_data = {
        "_id": str(uuid4()),
        "owner_id": str(uuid4()),
        "front": "Test Question",
        "back": "Test Answer"
    }
    
    response = test_client.post("/api/v1/flash-cards/", json=flash_card_data)
    assert response.status_code == 201
    data = response.json()
    assert data["front"] == flash_card_data["front"]
    assert data["back"] == flash_card_data["back"]

@pytest.mark.asyncio
async def test_get_flash_card(test_client, test_db):
    # First create a flash card
    flash_card_id = uuid4()
    flash_card_data = {
        "_id": str(flash_card_id),
        "owner_id": str(uuid4()),
        "front": "Test Question",
        "back": "Test Answer"
    }
    await test_db.flash_cards.insert_one(flash_card_data)
    
    # Then try to retrieve it
    response = test_client.get(f"/api/v1/flash-cards/{flash_card_id}")
    assert response.status_code == 200
    data = response.json()
    assert data["front"] == flash_card_data["front"]
    assert data["back"] == flash_card_data["back"]