
import { useNavigate } from 'react-router-dom'
import { Routes } from '../Constants/CompanyAdmin/Routes'

export const Navigation = () => {
    const navigate =useNavigate()
    const navigateHome= ()=> navigate(Routes.INSTANCES)
    const navigateCompany= ()=> navigate(Routes.COMAPANY)
    const navigateLogin= ()=> navigate(Routes.LOGIN)
    const navigateRegister= ()=> navigate(Routes.REGISTER)
    const navigateDocuments= ()=> navigate(Routes.DOCUMENTS)
    const navigateViewDoc= ()=> navigate(Routes.VIEWDOCUMENTS)

    return {navigateHome, navigateCompany, navigateLogin, navigateRegister, navigateDocuments,navigateViewDoc  }
}
