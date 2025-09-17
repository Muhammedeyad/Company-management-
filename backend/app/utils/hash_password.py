from passlib.context import CryptContext
from fastapi import HTTPException


context_lib = CryptContext(schemes=['bcrypt'], deprecated='auto')

def hash_password (plain_password:str):
    try: 
            hashed_pass = context_lib.hash(plain_password)
            return hashed_pass
    except Exception  as e:
          print(e)
          raise HTTPException(status_code=400, detail="Hashing Failed")