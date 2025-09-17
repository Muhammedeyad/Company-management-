from jose import jwt, JWTError
from fastapi import HTTPException, Header
from app.config.settings import settings

ALG=settings.ALG
EXPIRES_MINUTES=settings.EXPIRES_MINUTES
SECRET_KEY=settings.SECRET_KEY



def verify_user(token:str = Header(None)): 
    try:
            data= jwt.decode(token, SECRET_KEY, algorithms={ALG})
            return {"data": data["userid"]}
    except JWTError as e:
        print(e)
        raise HTTPException(status_code=401, detail=" unauthorized user!")