import { iot } from "@/main";

const SET_ROOMS = "setRooms";
const SET_DEVICES = "setDevices";
const state = {
  rooms: []
};
const getters = {};
const mutations = {
  [SET_ROOMS]: (state, rooms) => {
    state.rooms = rooms;
  },
  [SET_DEVICES]: (state, devices) => {
    state.rooms.forEach((room, index) => {
      room.things = devices[index].things;
    });
  }
};
const actions = {
  fetchRooms: async ({ state, commit }) => {
    const { thingGroups } = await iot.listThingGroups().promise();
    const groups = await Promise.all(
      thingGroups.map(group =>
        iot.describeThingGroup({ thingGroupName: group.groupName }).promise()
      )
    );
    const rooms = groups.map(group => ({
      id: group.thingGroupId,
      name: group.thingGroupName,
      things: [],
      ...group.thingGroupProperties.attributePayload.attributes
    }));
    commit(SET_ROOMS, rooms);

    const roomWithDevices = await Promise.all(
      rooms.map(group =>
        iot.listThingsInThingGroup({ thingGroupName: group.name }).promise()
      )
    );
    commit(SET_DEVICES, roomWithDevices);
    // const rooms = [
    //   {
    //     id: "1",
    //     name: "Living Room",
    //     img:
    //       "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&h=350&w=600",
    //     icon: "rooms/living-room",
    //     devices: [
    //       {
    //         name: "Bed lamp",
    //         status: false,
    //         icon: "device/lightbulb",
    //         color: "warning"
    //       },
    //       {
    //         name: "AC",
    //         status: true,
    //         icon: "device/air-conditioner",
    //         color: "info"
    //       },
    //       {
    //         name: "Audio",
    //         status: true,
    //         icon: "device/speaker",
    //         color: "primary"
    //       },
    //       {
    //         name: "Curtain",
    //         status: true,
    //         icon: "device/window",
    //         color: "success"
    //       }
    //     ]
    //   },
    //   {
    //     id: "2",
    //     name: "Bedroom",
    //     img: "https://liyici.files.wordpress.com/2013/01/38.jpg",
    //     icon: "rooms/bed",
    //     devices: [
    //       {
    //         name: "Lights",
    //         status: true,
    //         icon: "device/lightbulb",
    //         color: "warning"
    //       },
    //       {
    //         name: "TV",
    //         status: true,
    //         icon: "device/television",
    //         color: "primary"
    //       },
    //       {
    //         name: "Curtain",
    //         status: true,
    //         icon: "device/window",
    //         color: "success"
    //       }
    //     ]
    //   },
    //   {
    //     id: "3",
    //     name: "Kitchen",
    //     img:
    //       "https://st.hzcdn.com/simgs/f341a5730f77d17b_4-3935/modern-kitchen.jpg",
    //     icon: "rooms/kitchen",
    //     devices: [
    //       {
    //         name: "Lights",
    //         status: true,
    //         icon: "device/lightbulb",
    //         color: "warning"
    //       }
    //     ]
    //   }
    // ];
  }
};

export const rooms = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
