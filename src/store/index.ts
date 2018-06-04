import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { permission } from "./modules/permission";
import { tagsView } from "./modules/tagsView";
import { settings } from "./modules/settings";

export default new Vuex.Store({
  modules: {
    permission,
    tagsView,
    settings
  }
});
