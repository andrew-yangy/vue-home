import { iot } from "@/main";

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
  [SET_DEVICES]: (state, devices) => {
    state.devices = devices;
  }
};
const actions = {
  fetchDevices: async ({ state, commit }) => {
    const { things } = await iot.listThings({}).promise();
    const devices = things.map(thing => ({
      thingName: thing.thingName,
      status: true,
      ...thing.attributes
    }));
    commit(SET_DEVICES, devices);
    // const devices = [
    //   {
    //     name: "Bed lamp",
    //     status: true,
    //     icon: "device/lightbulb",
    //     color: "warning"
    //   },
    //   {
    //     name: "AC",
    //     status: true,
    //     icon: "device/air-conditioner",
    //     color: "info"
    //   },
    //   {
    //     name: "Audio",
    //     status: true,
    //     icon: "device/speaker",
    //     color: "primary"
    //   },
    //   {
    //     name: "Curtain",
    //     status: true,
    //     icon: "device/window",
    //     color: "success"
    //   }
    // ];
    // commit(SET_DEVICES, devices);
  }
};

export const devices = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
