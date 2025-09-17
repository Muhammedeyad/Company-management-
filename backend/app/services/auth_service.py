from app.models.user_model import User
from app.utils.generate_token import generate_token
from app.utils.hash_password import hash_password
from passlib.context import CryptContext
from fastapi import HTTPException
from sqlalchemy.orm import Session

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


def register_service(user_data, db):
    try:
        if(user_data.first_name == "" or user_data.second_name ==  ""  or user_data.email == ""  or user_data.password =="" or user_data.confirm_password == ""  or not user_data.role_id):
            return {"error": "All fields must be required!"}
        if(user_data.password != user_data.confirm_password):
            return {"error": "Confirm password must be same!"}
        existing_user= db.query(User).filter(User.email == user_data.email).first()
        if(not existing_user):
            hashed_pass = hash_password(user_data.password)
            new_user= User(
                first_name= user_data.first_name,
                second_name= user_data.second_name,
                email= user_data.email,
                password= hashed_pass,
                role_id= user_data.role_id
            )
            db.add(new_user)
            db.commit()
            db.refresh(new_user)
            return {"message": "Admin account registered !", "data": new_user}
        return {"error": "User already exists!"}
    except Exception as e:
        print(e)
        return {"error": e}
    
def login_service(email:str, password:str, db:Session):
    try:
        is_exist_user= db.query(User).filter(User.email == email).first()
        if is_exist_user:
            hashed_pass = pwd_context.verify(password, is_exist_user.password)
            if hashed_pass:
                token = generate_token({"userid": is_exist_user.user_id})
                return {"message": 'login success', "data": token}
            return {"error": ' wrong password!'}    
        return {"error": "User does't exists!"}
    except Exception as e:
        return {"error": e}
     
        