import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage";
import Product from "@/components/Products";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
