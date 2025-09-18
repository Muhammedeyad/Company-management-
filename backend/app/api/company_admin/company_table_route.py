from fastapi import APIRouter, Depends, Header
from app.services.company_admin.company_services import add_company_service, get_allcompany_service, update_company_service, delete_company_service
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.company_schema import CompanySchema
from app.dependencies.verify_user import verify_user

router = APIRouter()

@router.get("/get")
def get_all_company( auth_user = Depends(verify_user),  db:Session = Depends(get_db)):
    all_companies = get_allcompany_service(auth_user, db)
    return all_companies


@router.post("/add")
def add_company(company_data:CompanySchema, auth_user = Depends(verify_user),  db:Session = Depends(get_db)):
    new_company = add_company_service(company_data, auth_user, db)
    return new_company


@router.put("/update/{id}")
def update_company(id, company_data:CompanySchema, auth_user = Depends(verify_user),  db:Session = Depends(get_db)):
    updated_company=  update_company_service(company_data, auth_user, db, id)
    return updated_company

@router.delete("/delete/{id}")
def delete_company(id, auth_user = Depends(verify_user),  db:Session = Depends(get_db)):
    deleted_company=  delete_company_service( auth_user, db, id)
    return deleted_company