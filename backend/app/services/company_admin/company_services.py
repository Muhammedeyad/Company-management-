from app.models.company_model import Company
from fastapi import HTTPException


def get_allcompany_service(auth_user:dict, db):
    try:
        logged_user = auth_user["data"]["userid"]
        all_companies = db.query(Company).filter(Company.is_active==True, Company.created_by==logged_user).all()
        return {"message": "All data returned successfully", "data": all_companies}
    except Exception as e:
        raise HTTPException(status_code=401, detail=e)

def add_company_service(company_data, auth_user:dict, db):
    try:
            logged_user = auth_user["data"]["userid"]
            if(company_data.company_name == "" or company_data.description == "" or company_data.status == ""):
                 return {"error": "All fields must be required!"}
            company = Company(
                company_name=company_data.company_name,
                description=company_data.description,
                status=company_data.status,
                created_by= logged_user
            )
            db.add(company) 
            db.commit()
            db.refresh(company)
            return {"message": "New company added successfully!", "data": company}
    except Exception as e:
        raise HTTPException(status_code=401, detail=e)
    

def update_company_service(company_data, auth_user:dict, db, id):
    try:
        logged_user = auth_user["data"]["userid"]
        updated_company = db.query(Company).filter(Company.is_active== True, Company.company_id== id ).first()
        if(not updated_company):
            return {"message": 'no company found !', "data": []} 
        updated_company.company_name = company_data.company_name or updated_company.company_name
        updated_company.description = company_data.description or updated_company.description
        updated_company.status = company_data.status or updated_company.status

        db.commit()
        db.refresh(updated_company)
        return {"message": "Company updated successfully ! ", "data": updated_company} 
    except Exception as e:
        raise HTTPException(status_code=401, detail=e)
    


def delete_company_service(auth_user:dict, db, id):
    try:
        logged_user = auth_user["data"]["userid"]
        deleted_company = db.query(Company).filter(Company.is_active== True, Company.company_id == id).first()
        db.delete(deleted_company)
        db.commit()
        return {"message": "company deleted successfully!"}
    except Exception as e:
        raise HTTPException(status_code=401, detail=e)