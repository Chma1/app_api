import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage";
import MyAccount from "@/views/MyAccount.vue";
import Product from "@/components/Products";
import Error404 from "@/components/Error404.vue";
import Register from "@/components/users/Register.vue";
import Login from "@/components/users/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/promotion",
    name: "Product",
    component: Product,
  },
  {
    path: "/myAccount",
    name: "MyAccount",
    component: MyAccount,
    children: [
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/:catchALL(.*)",
    // path:'/:pathMatch(.*)*'
    name: "ERROR-404",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
