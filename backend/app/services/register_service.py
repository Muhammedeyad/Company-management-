from app.models.admin_model import CompanyAdmin


def register_service(user_data, db):
    try:
        if(user_data.first_name == "" or user_data.second_name ==  "" or  user_data.user_role == "" or user_data.email == ""  or user_data.password =="" or user_data.confirm_password == ""):
            return {"error": "All fields must be required!"}
        if(user_data.password != user_data.confirm_password):
            return {"error": "Confirm password must be same!"}
        existing_user= db.query(CompanyAdmin).filter(CompanyAdmin.email == user_data.email).first()
        if(not existing_user):
            new_user= CompanyAdmin(
                first_name= user_data.first_name,
                second_name= user_data.second_name,
                user_role= user_data.user_role,
                email= user_data.email,
                password= user_data.password
            )
            db.add(new_user)
            db.commit()
            db.refresh(new_user)
            return {"message": "Admin account registered !", "data": new_user}
        return {"error": "User already exists!"}
    except Exception as e:
        print(e)
        return {"error": e}