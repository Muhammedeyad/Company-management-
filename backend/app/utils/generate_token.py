from jose import jwt
from datetime import datetime, timedelta

ALG='HS256'
EXPIRES_MINUTES=60
SECRET_KEY='1234'


def generate_token(userid):
    expire = datetime.utcnow() + timedelta(minutes=EXPIRES_MINUTES)
    payload = {"userid": userid, "exp": expire}
    token =  jwt.encode(payload, SECRET_KEY, algorithm=ALG)
    return {"access_token": token}