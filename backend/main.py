from fastapi import FastAPI
from api.v1 import router as api_v1_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(api_v1_router, prefix="/api/v1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)