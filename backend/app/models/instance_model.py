from app.db.base import Base
from sqlalchemy import Column, String, Integer, Boolean, ForeignKey
from datetime import datetime
from sqlalchemy.orm import relationship

class Instance(Base):
    __tablename__ = 'instance'
    instance_id=Column(Integer, nullable=False, primary_key=True, default=datetime.utcnow())
    instance_name= Column(String, nullable=False)
    status = Column(Integer, nullable=False)
    is_active = Column(Boolean, nullable=False, default=1)
    created_at = Column(String, nullable=True, default=datetime.utcnow())
    created_by = Column(Integer, ForeignKey("user_master.user_id"))
    company_id = Column(Integer, ForeignKey("company_master.company_id"))

    
    users = relationship("User", back_populates='instances')
    companies= relationship("Company", back_populates="instances") 