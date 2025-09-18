from pydantic import BaseModel

class InstanceSchema(BaseModel):
    instance_name: str
    status: str
    company_id: int