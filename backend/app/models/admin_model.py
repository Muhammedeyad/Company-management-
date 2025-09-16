from sqlalchemy import Column, String, Integer
from app.db.base import Base



class CompanyAdmin(Base):
    __tablename__ = "companyadmin"
    user_id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    second_name = Column(String, nullable=False)
    user_role = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)