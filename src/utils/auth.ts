import { Ref, ref } from "vue"
import axios from "axios"
import { User } from "@/models"

const serverUrl = "https://626d-178-237-232-187.eu.ngrok.io"

export const useAuth = () => {
    const activeUser: Ref<User | null> = ref(null)

    const login = async(email: string, password: string) => {
        // Primero hacemos la llamada a la api
        // Segundo chequeamos que todo esté correcto
        // Si está correcto, vincular ese usuario con el activeUser
        const { data } = await axios.post(`${serverUrl}/auth`, {
            email, password
        })
        const { user } = data
        console.log(user)
        activeUser.value = {
            email,
            username: user.username
        }
        return activeUser.value
    }

    const logout = () => {
        activeUser.value = null
    }

    return { activeUser, login, logout }
}