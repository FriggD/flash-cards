from uuid import UUID
from pydantic import Field
from app.models.base import BaseSchema

class AreaBase(BaseSchema):
    owner_id: UUID
    name: str
    description: str = ""

class AreaCreate(AreaBase):
    pass

class AreaUpdate(AreaBase):
    pass

class AreaInDB(AreaBase):
    pass

class Area(AreaInDB):
    pass