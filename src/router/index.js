import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InvoiceView from "../views/InvoiceView.vue";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/sign-in",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/tutorials",
    name: "tutorials",
    component: () => import("../views/TutorialsList.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/AddTutorial.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticatedUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authenticatedUser) {
    alert("Спочатку ввійдіть");
    next("/sign-in");
  } else {
    next();
  }
});

export default router;
