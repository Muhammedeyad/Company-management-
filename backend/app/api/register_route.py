from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.user_schema import UserSchema
from app.services.register_service import register_service

router = APIRouter()


@router.post("/register")
async def register(user_data: UserSchema, db:Session = Depends(get_db)):
    registered_user = register_service(user_data, db)
    return registered_user
