import { baseURL, http } from "../../boot";

const state = () => ({
  stats: {},
  statsEndpoint: `${baseURL}/stats`,
});

const getters = {
  getStats: (state) => state.stats,
  getStatsEndpoint: (state) => state.statsEndpoint,
};

const mutations = {
  updateStats(state, data) {
    state.stats = data;
  },
};

const actions = {
  async fetchStats(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .get(context.getters.getStatsEndpoint, payload)
        .then((response) => {
          context.commit("updateStats", response.data);
          resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
