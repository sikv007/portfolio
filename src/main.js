import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MainLogo from "./components/shared/ui/MainLogo.vue";
import MainGraphic from "./components/shared/ui/MainGraphic.vue";
import BaseLoader from "./components/shared/ui/BaseLoader.vue";

import "./assets/scss/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
app.component("main-graphic", MainGraphic);
app.component("main-logo", MainLogo);
app.component("base-loader", BaseLoader);
app.use(createPinia());
app.use(router);
app.mount("#app");
