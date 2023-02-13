import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMagnifyingGlass,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import VueSimpleAlert from "vue3-simple-alert-next";
import moment from "moment";

library.add(faMagnifyingGlass);
library.add(faWandMagicSparkles);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(VueSimpleAlert, {})
  .use(router)
  .mount("#app");

moment.locale("es");
