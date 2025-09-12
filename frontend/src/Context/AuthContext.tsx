import React, { createContext, useContext, useState } from 'react'
import type { AuthContextTypes, ReactChild } from '../types/CompanyAdmin/PropTypes'
import type { AuthUserType } from '../types/CompanyAdmin/PropTypes'


const AuthContext = createContext<AuthContextTypes | null>(null)

export const UseAuthContext = ()=>{
	return useContext(AuthContext)
}

const AuthContextProvider: React.FC<ReactChild> = ({ children }) => {
    const [authUserData, setAuthUserData] = useState<AuthUserType>({
        username: "",
        password: "",
        instanceName: ""
    })
	return (
        <AuthContext.Provider value={{ authUserData: authUserData, setAuthUserData: setAuthUserData }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider