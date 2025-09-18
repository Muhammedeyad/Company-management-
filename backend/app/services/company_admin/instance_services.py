from fastapi import HTTPException
from app.models.instance_model import Instance
from app.models.company_model import Company

def add_instance_sevice(instance_data, auth_user, db, company_id):
    try:
        logged_user = auth_user["data"]["userid"]
        existing_company = db.query(Company).filter(Company.company_id == company_id, Company.is_active == True).first()
        if(not existing_company):
            return {"error": "No Company found!"}
        if (instance_data.instance_name == "" or instance_data.status == ""):
            return {"error": "All fields must be required!"}
        new_instance = Instance(
            instance_name = instance_data.instance_name,
            status = instance_data.status,
            company_id = int(company_id),
            created_by = logged_user
        )
        db.add(new_instance)
        db.commit()
        db.refresh(new_instance)
        return {"message": "Successfully added new instance!", "data": new_instance}
    except Exception as e:
        raise HTTPException(status_code=400, detail=e)
    


def get_instances_service(company_id, auth_user, db):
    try:
        logged_user = auth_user["data"]["userid"]
        is_company_exist = db.query(Company).filter(Company.company_id == company_id, Company.is_active == True).first()
        if not is_company_exist:
            return {"error": "No company found for this id"}
        all_company_instances = db.query(Instance).filter(Instance.created_by == logged_user, Instance.company_id== company_id ).all()
        if(len(all_company_instances) < 1):
            return {"message": "No instances found for this company!", "data": all_company_instances}
        return {"message": "all company catched here!", "data": all_company_instances}
    except Exception as e:
        raise HTTPException(status_code=400, detail=e) 
    


def update_instance_service(instance_updated_data, instance_id, auth_user, db):
    try:
          updated_instance = db.query(Instance).filter(Instance.instance_id == instance_id).first()  
          if not updated_instance:
                 return {"error": "No instance found for this id"}
          updated_instance.instance_name=instance_updated_data.instance_name or updated_instance.instance_name
          updated_instance.status = instance_updated_data.status or updated_instance.status
          db.commit()
          db.refresh(updated_instance)
          return {"message": "Company instance updated!", "data": updated_instance}
    except Exception as e:
        raise HTTPException(status_code=400, detail=e) 


def delete_instance_service(instance_id, auth_user, db):
    try:
        logged_user = auth_user["data"]["userid"]
        deleted_instance = db.query(Instance).filter(Instance.instance_id == instance_id, Instance.is_active == True, Instance.created_by == logged_user).first()
        if deleted_instance:
                deleted_instance.is_active= False
                db.commit()
                return {"message": "Company instance deleted sucessfullyy!"}

        return {"error": "Instance does not exists!"} 
    except Exception as e:
        raise HTTPException(status_code=400, detail=e) 