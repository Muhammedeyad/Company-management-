from fastapi import APIRouter, Depends
from app.db.session import get_db
from app.schemas.instance_schema import InstanceSchema
from app.dependencies.verify_user import verify_user
from app.services.company_admin.instance_services import add_instance_sevice, get_instances_service, update_instance_service, delete_instance_service
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/get/{company_id}")
def get_all_instances(company_id, auth_user:str= Depends(verify_user), db:Session = Depends(get_db)):
    all_instances = get_instances_service(company_id, auth_user, db)
    return all_instances


@router.post("/add/{company_id}")
def add_instance(instance_data: InstanceSchema, company_id, auth_user:str= Depends(verify_user), db:Session = Depends(get_db)):
    instance = add_instance_sevice(instance_data,auth_user, db, company_id)
    return instance



@router.put("/update/{instance_id}")
def update_company_instance(instance_updated_data:InstanceSchema, instance_id, auth_user:str= Depends(verify_user), db:Session = Depends(get_db)):
    updated_instance = update_instance_service(instance_updated_data, instance_id, auth_user, db)
    return updated_instance


@router.delete("/delete/{instance_id}")
def delete_company_instance(instance_id, auth_user:str= Depends(verify_user), db:Session = Depends(get_db)):
    deleted_instance_message = delete_instance_service(instance_id, auth_user, db)
    return deleted_instance_message