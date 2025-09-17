from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.config.settings import settings

DB_URL=settings.DB_URL
engine=create_engine(DB_URL)
LocalSession = sessionmaker(bind=engine, autoflush=False, autocommit=False)


def get_db(): 
    try: 
        db=LocalSession()
        yield db
    finally:
        db.close()