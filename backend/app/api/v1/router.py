from fastapi import APIRouter

api_router = APIRouter()

# Import and include individual route modules
from app.api.v1.endpoints import (
    # users,
    # areas,
    # categories,
    # topics,
    # packages,
    flash_cards,
    # study_plans,
    # study_sessions
)

# api_router.include_router(users.router, prefix="/users", tags=["users"])
# api_router.include_router(areas.router, prefix="/areas", tags=["areas"])
# api_router.include_router(categories.router, prefix="/categories", tags=["categories"])
# api_router.include_router(topics.router, prefix="/topics", tags=["topics"])
# api_router.include_router(packages.router, prefix="/packages", tags=["packages"])
api_router.include_router(flash_cards.router, prefix="/flash-cards", tags=["flash-cards"])
# api_router.include_router(study_plans.router, prefix="/study-plans", tags=["study-plans"])
# api_router.include_router(study_sessions.router, prefix="/study-sessions", tags=["study-sessions"])