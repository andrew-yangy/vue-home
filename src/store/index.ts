import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { permission } from "./modules/permission";
import { tagsView } from "./modules/tagsView";

export default new Vuex.Store({
  modules: {
    permission,
    tagsView
  }
});
