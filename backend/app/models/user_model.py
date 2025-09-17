from sqlalchemy import Column, String, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from app.db.base import Base
from datetime import datetime



class User(Base):
    __tablename__ = "user_master"
    user_id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    second_name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    role_id=Column(Integer, ForeignKey("role_master.role_id"))
    is_active = Column(Boolean, nullable=True, default=1)
    created_at = Column(String, nullable=True, default=datetime.utcnow())
    

    instances = relationship("Instance", back_populates='users')
    roles = relationship("Role", back_populates='users')
    companies = relationship("Company", back_populates='users')

