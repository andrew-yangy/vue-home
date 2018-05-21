import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { permission } from './modules/permission';

export default new Vuex.Store({
    modules: {
        permission
    }
});
