import { createRouter, createWebHistory } from 'vue-router'
import CustomersPage from "../pages/CustomersPage.vue";
import BusinessPage from "../pages/BusinessPage.vue";

export const routerNames = {
  business: "business",
  customers: "customers"
}

const routers = [
  {
    path: "/business",
    name: routerNames.business,
    component: BusinessPage,
    meta: {
      title: "Budss for business",
      description: "Budss for business",
    }
  },
  {
    path: "/customers",
    name: routerNames.customers,
    component: CustomersPage,
    meta: {
      title: "Budss for customers",
      description: "Budss for customers",
    }
  }
]

const router = createRouter({
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return {top: 0};
  },
  history: createWebHistory(import.meta.env.BASE_URL),
})

router.beforeEach((to, from, next) => {
  const {title, description} = to.meta;
  document.title = title || "Budss";
  const meta = document.querySelector("meta[name=\"description\"]");
  meta.setAttribute("content", description || "Our cool web site");

  next();
});

export default router
