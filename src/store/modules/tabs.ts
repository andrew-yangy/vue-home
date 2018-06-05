const state = {
  visitedTabs: [],
  cachedTabs: []
};
const getters = {};
const mutations = {
  ADD_TABS: (state, view) => {
    if (!view.name || state.visitedTabs.some(v => v.path === view.path)) return;
    state.visitedTabs.push({
      name: view.name,
      path: view.path,
      title: view.meta.title || "no-name"
    });
    if (!view.meta.noCache) {
      state.cachedTabs.push(view.name);
    }
  },
  DEL_TAB: (state, name) => {
    state.visitedTabs = state.visitedTabs.filter(
      tab => tab && tab.name !== name
    );
    state.cachedTabs = state.cachedTabs.filter(tab => tab && tab.name !== name);
  }
};
const actions = {
  addTabs({ commit }, view) {
    commit("ADD_TABS", view);
  },
  delTab({ commit, state }, name) {
    commit("DEL_TAB", name);
  }
};

export const tabs = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
