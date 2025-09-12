import { lazy } from "react";


export const CompanyAdminRoutes = lazy(() => import("../Routes/CompanyAdminRoutes/CompanyAdminRoutes"))
export const ChatBotRoute = lazy(() => import("../Routes/ChatBotRoutes/ChatBotRoute"))

export const AuthenticationPage = lazy(() => import("../Screens/AuthenticationPage"))



export const Sidebar = lazy(() => import("../Layouts/CompanyAdmin/Sidebar"))
export const CompanyIntances = lazy(() => import("../Screens/CompanyAdmin/CompanyInstances"))
export const RegisterNewUserPage = lazy(() => import("../Screens/CompanyAdmin/RegisterNewUserPage"))
export const CompaniesPage = lazy(() => import("../Screens/CompanyAdmin/CompaniesPage"))
export const UploadDocumentPage = lazy(() => import("../Screens/CompanyAdmin/UploadDocumentPage"))
export const ViewDocuments = lazy(() => import("../Screens/CompanyAdmin/ViewDocuments"))


export const ChatbotPage = lazy(()=> import("../Screens/Chatbot/ChatbotPage"))