import { Ref, ref } from "vue"
import axios from "axios"
import { User } from "@/models"

const serverUrl = "https://135d-178-237-232-187.eu.ngrok.io"
const tokenName = "jwt"

const setCookie = (cookieName: string, value: string): void => {
  document.cookie = `${cookieName}=${value}`
}

const removeCookie = (cookieName: string): void => {
  document.cookie = `${cookieName}=;expires=${new Date().toUTCString()}`
}

export const getTokenFromCookies = (): string | void => {
  const cookies = document.cookie
  if (!cookies) return
  const token =
        cookies?.split("; ")
          ?.find(cookie => cookie.substring(0, 3) === "jwt")
          ?.split("=")[1]
  return token
}

export const useAuth = () => {
  const activeUser: Ref<User | null> = ref(null)

  const login = async (email: string, password: string) => {
    // Primero hacemos la llamada a la api
    // Segundo chequeamos que todo esté correcto
    // Si está correcto, vincular ese usuario con el activeUser
    const { data } = await axios.post(`${serverUrl}/auth`, {
      email, password
    })
    const { user, token } = data
    console.log(user, token)
    setCookie(tokenName, token)
    // const info = jwt.verify(token, "aprendiendo vue")
    // console.log(info)
    activeUser.value = {
      email,
      username: user.username
    }
    return activeUser.value
  }

  const logout = () => {
    activeUser.value = null
    removeCookie("jwt")
  }

  const checkAuth = async (route: string) => {
    const token = getTokenFromCookies()
    if (!token) return false
    try {
      const res = await axios.post(`${serverUrl}/checkToken`, {
        token,
        route
      })
      if (res.data.success) return true
      return false
    } catch (e) {
      console.error(e)
      return false
    }
  }

  return { activeUser, login, logout, checkAuth }
}
