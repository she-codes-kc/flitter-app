import { createStore } from "vuex";
import { user } from "@/store/users";

export default createStore({
  modules: {
    user,
  },
});
