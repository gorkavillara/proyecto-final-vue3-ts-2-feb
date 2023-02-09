import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from './utils/auth'
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
