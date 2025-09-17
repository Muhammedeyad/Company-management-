
from sqlalchemy import Column, String, Integer, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.base import Base

class Company(Base):
    __tablename__ = "company_master"
    company_id = Column(Integer, primary_key=True)
    company_name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    status = Column(String, nullable=False)
    is_active = Column(Boolean, nullable=False, default=1)
    created_at = Column(String, nullable=True, default=datetime.utcnow())
    created_by = Column(Integer,  ForeignKey("user_master.user_id"))
    

    users = relationship("User", back_populates="companies")
    instances= relationship("Instance", back_populates="companies")
