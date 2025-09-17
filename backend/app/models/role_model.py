from app.db.base import Base
from sqlalchemy import Column, String, Integer, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime


class Role(Base):
    __tablename__ = 'role_master'
    role_id = Column(Integer, primary_key=True)
    role_name = Column(String, nullable=False)
    is_active = Column(Boolean, nullable=False, default=1)
    created_at = Column(String, nullable=True, default=datetime.utcnow())
    created_by = Column(Integer, nullable=True, default=1)
    modified_at = Column(String, nullable=True)
    modified_by = Column(Integer, nullable=True)

    users = relationship("User", back_populates='roles')