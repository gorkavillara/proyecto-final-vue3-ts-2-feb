import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { useAuth } from "./utils/auth"
import App from "./App.vue"
import routes from "./routes"
import { Quasar } from "quasar"
import quasarUserOptions from "./quasar-user-options"

const globalAuth = useAuth()
// const { activeUser, login, logout } = useAuth()
// activeUser.value = {
//     email: "gorka@gorka",
//     username: "gorkavi"
// }

const app = createApp(App).use(Quasar, quasarUserOptions)

const router = createRouter({
  routes,
  history: createWebHistory()
})

// app.provide("activeUser", activeUser)
// app.provide("login", login)
// app.provide("logout", logout)

app.provide("globalAuth", globalAuth)

app.use(router)

app.mount("#app")
