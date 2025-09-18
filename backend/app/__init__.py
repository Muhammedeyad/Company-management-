from fastapi import FastAPI
from app.api import auth_route, user_role_route
from app.api.company_admin import company_table_route, instance_table_route
from app.models.role_model import Role #just for table creation
from app.models.instance_model import Instance 
from app.models.company_model import Company 
from fastapi.middleware.cors import CORSMiddleware
from app.config.settings import settings

def create_app():
    # Initilization of fast api application
    app = FastAPI()

    # application middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins = [settings.CLIENT_URL],
        allow_methods = ['GET', 'POST', 'PUT', 'DELETE']
    )

    #application routes     
    app.include_router(auth_route.router, prefix='/api/auth')
    app.include_router(company_table_route.router, prefix="/api/company/table")
    app.include_router(instance_table_route.router, prefix="/api/instance/table")
    app.include_router(user_role_route.router, prefix='/api/role')

    # returning app
    return app