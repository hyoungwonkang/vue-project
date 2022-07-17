import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DataBinding from "../views/DataBinding.vue";
// import DataBindingHtml from "../views/DataBindingHtml.vue";
// import DataBindingInputText from "../views/DataBindingInputText.vue";
// import DataBindingInputNumber from "../views/DataBindingInputNumber.vue";
// import DataBindingSelect from "../views/DataBindingSelect.vue";
// import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
// import DataBindingCheckbox2 from "../views/DataBindingCheckbox2.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackPrefetch: true */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBindingRadio,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
