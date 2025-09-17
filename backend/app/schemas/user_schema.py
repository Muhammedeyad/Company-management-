from pydantic import BaseModel

class UserSchema(BaseModel):
    first_name: str
    second_name: str
    email: str
    password: str
    confirm_password: str
    role_id: int
