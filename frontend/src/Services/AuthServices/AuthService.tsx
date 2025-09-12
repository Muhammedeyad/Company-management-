import { api } from "../../axios/axios"

export const AuthService =  () => {
    async function useAuthService(registeruser) {
        try {
            const jsonData = await JSON.stringify(registeruser)
            const data = await api.post(import.meta.env.VITE_API_URL, jsonData)
            if (!data) {
                throw new Error("data not found")
            }
            return data
        } catch (err) {
            console.log(err.message)
        }
    }
    return {useAuthService}
}
