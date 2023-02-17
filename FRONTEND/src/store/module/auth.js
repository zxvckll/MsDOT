import axios from "axios";
const state = () => ({
  isAdmin: false,
  accessToken: "",
});

const getters = {
  getLoginStatus(state) {
    return state.isAdmin;
  },
  getAccessToken(state) {
    return state.accessToken;
  },
};

const actions = {
  async login({ commit }, payload) {
    const response = await axios
      .post("http://localhost:5000/login", payload)
      .catch((err) => {
        console.log(err);
      });

    if (response && response.data) {
      commit("setIsAdmin", true);
      commit("setAccessToken", response.data.accessToken);
    } else {
      commit("setIsAdmin", false);
    }
  },
  logout({ commit }) {
    commit("setIsAdmin", false);
    commit("setAccessToken", '');
  },
};

const mutations = {
  setAccessToken(state, value) {
    state.accessToken = value
  },

  setIsAdmin(state, value) {
    state.isAdmin = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
