from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.user_schema import UserSchema
from app.services.auth_service import register_service, login_service
from app.dependencies.verify_user import verify_user
router = APIRouter()


@router.post("/register")
async def register(user_data: UserSchema, db:Session = Depends(get_db)):
    registered_user = register_service(user_data, db)
    return registered_user

@router.post("/login")
def login(email:str, password:str, db:Session = Depends(get_db)):
    try:
        logged_user = login_service(email, password, db)
        return logged_user
    except Exception  as e:
        print(e)
        raise HTTPException(status_code=400, detail=e)


# @router.get('/product')
# def get_products( auth_user = Depends(verify_user)):
#     return {"products": [auth_user]}

# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOnsidXNlcmlkIjo3fSwiZXhwIjoxNzU4MTMwNjg0fQ.2t75go2DyzQ1elpDGWvV_ZVjX3sNOTZwZKT64gEEni4