import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Routes as CRoutes } from '../../Constants/CompanyAdmin/Routes'
import { Sidebar, CompanyIntances, RegisterNewUserPage, CompaniesPage, UploadDocumentPage, ViewDocuments } from '../../Lazy/LazyImports'
const CompanyAdminRoutes: React.FC = () => {


  return (
    <Routes>
      <Route path={CRoutes.INSTANCES} element={<Sidebar />}>
        <Route path={CRoutes.INSTANCES} element={<CompanyIntances />} />
        <Route path={CRoutes.REGISTER} element={<RegisterNewUserPage />} />
        <Route path={CRoutes.COMAPANY} element={<CompaniesPage />} />
        <Route path={CRoutes.DOCUMENTS} element={<UploadDocumentPage />} />
        <Route path={CRoutes.VIEWDOCUMENTS} element={<ViewDocuments />} />
      </Route>
    </Routes>
  )
}

export default CompanyAdminRoutes