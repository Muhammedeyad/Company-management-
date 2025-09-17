from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DB_URL:str
    ALG:str
    EXPIRES_MINUTES:int
    SECRET_KEY:str

    class Config:
        env_file= '.env'

settings=Settings()