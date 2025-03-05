from datetime import datetime
from typing import Optional
from uuid import UUID

from pydantic import BaseModel, Field

class BaseSchema(BaseModel):
    # id: UUID = Field(alias="_id")
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        allow_population_by_field_name = True
        json_encoders = {
            # UUID: lambda v: str(v),
            datetime: lambda v: v.isoformat()
        }