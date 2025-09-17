from pydantic import BaseModel


class CompanySchema (BaseModel):
    company_name:str
    description: str
    status: str