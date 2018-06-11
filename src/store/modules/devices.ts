const SET_DEVICES = "setDevices";
const state = {
  devices: []
};
const getters = {
  getFrequentDevices: state => {
    return state.devices.slice(0, 3);
  }
};
const mutations = {
  [SET_DEVICES]: (state, payload) => {
    state.devices = payload;
  }
};
const actions = {
  fetchDevices({ commit, state }) {
    const devices = [
      {
        name: "Bed lamp",
        states: true,
        icon: "device/lightbulb",
        color: "warning"
      },
      {
        name: "AC",
        states: true,
        icon: "device/air-conditioner",
        color: "info"
      },
      {
        name: "Audio",
        states: true,
        icon: "device/speaker",
        color: "primary"
      },
      {
        name: "Curtain",
        states: true,
        icon: "device/window",
        color: "success"
      }
    ];
    commit(SET_DEVICES, devices);
  }
};

export const devices = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
