from fastapi import APIRouter

router = APIRouter()


@router.get("/{asin}")
def get_sellers(asin: str): ...