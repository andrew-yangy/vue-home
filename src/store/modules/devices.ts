import { iot, shadows } from "@/services/aws-iot";

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
  setDevices: (state, devices) => {
    state.devices = devices;
  },
  setStatus: (state, { name, status }) => {
    console.log(name, status);
    state.devices.forEach(device => {
      if (device.thingName === name) {
        device.status = status;
      }
    });
  }
};
const actions = {
  fetchDevices: async ({ state, commit }) => {
    const { things } = await iot.listThings({}).promise();
    const devices = things.map(thing => ({
      thingName: thing.thingName,
      status: true,
      registered: false,
      ...thing.attributes
    }));
    commit(SET_DEVICES, devices);
    devices.forEach(device => {
      if (!device.registered) {
        shadows.client.register(device.thingName, () => {
          shadows.client.get(device.thingName);
          // const test = {
          //   state: {
          //     reported: {
          //       status: false
          //     }
          //   }
          // };
          // shadows.client.update(device.thingName, test);
        });
      }
      device.registered = true;
    });
  },
  toggleDevice: ({ state, commit }, { name, status }) => {
    const stateObject = {
      state: {
        desired: {
          status
        }
      }
    };
    shadows.client.update(name, stateObject);
  }
};

export const devices = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
