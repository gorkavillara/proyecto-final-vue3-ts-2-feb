import { LogIn, Clientes, Proveedores, ReservaSalas } from "@/sections";
import { RouteRecordRaw } from "vue-router";
import { useAuth } from "@/utils/auth";

const { checkAuth } = useAuth()

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: LogIn,
    name: "Login",
    props: { activeUser: null },
  },
  {
    path: "/clientes",
    component: Clientes,
    name: "Clientes",
    async beforeEnter(to, from, next) {
      // Chequeamos si el usuario tiene permitido este acceso
      const isAuthenticated = await checkAuth(to.path)
      // Si sí => next()
      if (isAuthenticated) {
        next()
      } else {
        next("/login")
      }
    },
  },
  { path: "/proveedores", component: Proveedores, name: "Proveedores" },
  { path: "/reservas", component: ReservaSalas, name: "ReservaSalas" },
];

export default routes;
