from uuid import UUID
from pydantic import Field
from app.models.base import BaseSchema

class UserBase(BaseSchema):
    pass

class UserCreate(UserBase):
    pass

class UserUpdate(UserBase):
    pass

class UserInDB(UserBase):
    pass

class User(UserInDB):
    pass