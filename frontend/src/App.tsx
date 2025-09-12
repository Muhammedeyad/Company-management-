
import { Routes, Route } from "react-router-dom"
import { Routes as CRoutes } from './Constants/CompanyAdmin/Routes'
import { Routes as CBRoutes } from './Constants/ChatBot/Routes';
import { CompanyAdminRoutes, ChatBotRoute, AuthenticationPage } from './Lazy/LazyImports'


function App() {
  return (
<>  
    <div className=" ">
      <Routes>
        <Route path={CBRoutes.CHATBOT} element={<ChatBotRoute />} />
        <Route path={CRoutes.COMAPANY} element={<CompanyAdminRoutes />} />
        <Route path={CRoutes.LOGIN} element={<AuthenticationPage />} />
        <Route path="*" element={<>not found</>} />
      </Routes>

    </div>
     
    </>
  )
}

export default App
