import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  // {
  //   path: "/login",
  //   component: () => import("@/views/login/index"),
  //   hidden: true,
  // },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/changeover",
    children: [
      {
        path: "changeover",
        name: "changeover",
        component: () => import("@/views/smtapply/changeover.vue"),
        meta: { title: "一键换线" },
      },
      // {
      //   path: "changeover",
      //   name: "changeover",
      //   component: () => import("@/views/smtapply/changeover.vue"),
      //   meta: { title: "首c页" },
      // }
    ],
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
];
export const error404 = { path: "*", redirect: "/404", hidden: true };
const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
