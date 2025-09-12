import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Routes as CBRoutes } from '../../Constants/ChatBot/Routes'
import { ChatbotPage, AuthenticationPage } from '../../Lazy/LazyImports'

 const ChatBotRoute:React.FC = () => {
  return (
    <Routes>
        <Route path={CBRoutes.HOME} element={<ChatbotPage/>}/>
        <Route path={CBRoutes.LOGIN} element={<AuthenticationPage/>}/>
    </Routes>
  )
}
export default ChatBotRoute