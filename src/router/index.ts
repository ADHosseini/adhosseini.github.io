import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Overview.vue"),
        props: {publicPath: process.env.BASE_URL}
      },
      {
        path: "/pages/about-us",
        name: "about-us",
        component: () => import("@/views/pages/AboutUs.vue"),
      },
      {
        path: "/pages/invoice",
        name: "invoice",
        component: () => import("@/views/pages/Invoice.vue"),
      },
      {
        path: "/pages/faq",
        name: "faq",
        component: () => import("@/views/pages/FAQ.vue"),
      },
      {
        path: "/php/intro",
        name: "phpIntro",
        component: () => import("@/views/php/Intro.vue"),
      },
      {
        path: "/php/array",
        name: "phpArray",
        component: () => import("@/views/php/Array.vue"),
      },
      {
        path: "/php/input_array/:name?",
        name: "phpInputArray",
        component: () => import("@/views/php/InputArray.vue"),
      },
      {
        path: "/php/sessions",
        name: "phpSessions",
        component: () => import("@/views/php/Sessions.vue"),
      },
      {
        path: "/php/cookies",
        name: "phpCookies",
        component: () => import("@/views/php/Cookies.vue"),
      },
      {
        path: "/javascript/intro",
        name: "javascriptIntro",
        component: () => import("@/views/javascript/Intro.vue"),
      },
      {
        path: "/javascript/run",
        name: "javascriptRun",
        component: () => import("@/views/javascript/Run.vue"),
      },
      {
        path: "/javascript/output",
        name: "javascriptOutput",
        component: () => import("@/views/javascript/Output.vue"),
      },
      {
        path: "/javascript/data",
        name: "javascriptData",
        component: () => import("@/views/javascript/Data.vue"),
      },
      {
        path: "/javascript/function",
        name: "javascriptFunction",
        component: () => import("@/views/javascript/Function.vue"),
      },
      {
        path: "/account",
        name: "account",
        component: () => import("@/components/page-layouts/Account.vue"),
        children: [
          {
            path: "overview",
            name: "account-overview",
            component: () => import("@/views/account/Overview.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboard",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
