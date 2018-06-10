const SET_ROOMS = "setRooms";
const state = {
  rooms: []
};
const getters = {};
const mutations = {
  [SET_ROOMS]: (state, payload) => {
    state.rooms = payload;
  }
};
const actions = {
  fetchRooms: async ({ dispatch, commit }) => {
    const rooms = [
      {
        id: "1",
        name: "Living Room",
        img:
          "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&h=350&w=600",
        icon: "rooms/living-room"
      },
      {
        id: "2",
        name: "Bedroom",
        img: "https://liyici.files.wordpress.com/2013/01/38.jpg",
        icon: "rooms/bed"
      },
      {
        id: "3",
        name: "Kitchen",
        img:
          "https://st.hzcdn.com/simgs/f341a5730f77d17b_4-3935/modern-kitchen.jpg",
        icon: "rooms/kitchen"
      }
    ];
    commit(SET_ROOMS, rooms);
  }
};

export const rooms = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
