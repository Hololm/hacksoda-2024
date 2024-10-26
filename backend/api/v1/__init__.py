from fastapi import APIRouter
from .asin import router as search_router

router = APIRouter(prefix="/api/v1")
router.include_router(search_router, tags=["asin"], prefix="/asin")