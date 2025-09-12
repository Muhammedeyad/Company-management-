import { useMutation } from "@tanstack/react-query"
import type { RegisterUserType } from "../../../types/CompanyAdmin/PropTypes"
import { AuthService } from "../../../Services/AuthServices/AuthService"
import { validateUserData } from "../../../Utils/ValidateAuthFunc"
// import { toast } from "react-toastify"


export const UseRegisterHook = () => {
    const mutation = useMutation({
        mutationFn: useRegisterHook,
        onSuccess: (data) => {
            console.log(data)
            // toast.success('Registered Successfully!')
        },
        onError: (err)=>{
            console.error(err)
        }
    })
    const {useAuthService} = AuthService()
    async function useRegisterHook (registerUser:RegisterUserType) {
        try {
            if(!validateUserData(registerUser)){
                return false
            }
            return useAuthService(registerUser)
        } catch (err:any) {
            console.log(err.message)
        }
    }
    return { mutation }
}




