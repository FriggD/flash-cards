from typing import List, Optional
from uuid import UUID
from datetime import datetime
from pydantic import Field
from app.models.base import BaseSchema

class FlashCardBase(BaseSchema):
    owner_id: UUID
    original_owner_id: Optional[UUID] = None
    front: str
    back: str
    area_id: Optional[UUID] = None
    category_id: Optional[UUID] = None
    topic_id: Optional[UUID] = None
    tags: List[str] = []
    pack_id: Optional[UUID] = None
    study_plans: List[UUID] = []
    imported_at: Optional[datetime] = None

class FlashCardCreate(FlashCardBase):
    pass

class FlashCardUpdate(FlashCardBase):
    pass

class FlashCardInDB(FlashCardBase):
    pass

class FlashCard(FlashCardInDB):
    pass