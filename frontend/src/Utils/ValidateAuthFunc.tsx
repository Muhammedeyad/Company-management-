import { toast } from "react-toastify"

export function validateUserData(registerUser:RegisterUserType){
    if(!registerUser.firstName || !registerUser.lastName || !registerUser.userRole || !registerUser.email || !registerUser.password || !registerUser.confirmPassword){
        toast.error('all fields must be required!')
        return false
    }
    if(registerUser.password != registerUser.confirmPassword){
         toast.error('confirm password must be same!')
        return false
    }
    return true
}