import { LogIn, Clientes, Proveedores, ReservaSalas } from "@/sections";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: LogIn,
    name: "Login",
    props: { activeUser: null },
  },
  { path: "/clientes", component: Clientes, name: "Clientes" },
  { path: "/proveedores", component: Proveedores, name: "Proveedores" },
  { path: "/reservas", component: ReservaSalas, name: "ReservaSalas" },
];

export default routes;
