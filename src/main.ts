import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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

app.use(BootstrapVue)
app.use(IconsPlugin)

app.mount('#app')
