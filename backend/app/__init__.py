from fastapi import FastAPI
from app.api import register_route
from app.api.company_admin import company_table_route
from app.models.admin_model import CompanyAdmin #just for table creation

def create_app():
    app = FastAPI()

    #routes     
    app.include_router(register_route.router, prefix='/api/auth')
    app.include_router(company_table_route.router, prefix="/api/company/table")

    return app