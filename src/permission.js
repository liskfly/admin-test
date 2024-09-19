import router from "./router";
import { error404 } from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";
import { getAsyncRoutes } from "@/utils/asyncRouter";

import { constantRoutes } from "./router/index";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  next();
  NProgress.done();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
