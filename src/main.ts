import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import { useAuth } from './utils/auth'
import "./style.css"
import App from './App.vue'
import routes from './routes'

const globalAuth = useAuth()
// const { activeUser, login, logout } = useAuth()
// activeUser.value = {
//     email: "gorka@gorka",
//     username: "gorkavi"
// }

const app = createApp(App)

const router = createRouter({
    routes,
    history: createWebHistory()
})

// app.provide("activeUser", activeUser)
// app.provide("login", login)
// app.provide("logout", logout)

app.provide("globalAuth", globalAuth)

app.use(router)

app.mount('#app')
