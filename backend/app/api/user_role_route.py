from fastapi import APIRouter, Depends
from app.db.session import get_db
from sqlalchemy.orm import Session
from app.models.role_model import Role

router = APIRouter()

@router.post("/add")
def add_user_role(role_name: str, db:Session=Depends(get_db)):
    try: 
        role1=Role(
        role_name= role_name
         )
        db.add(role1)
        db.commit()
        db.refresh(role1)
        return role1
    except Exception as e:
        return {"error": e}
