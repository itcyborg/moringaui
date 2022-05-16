import { baseURL, http } from "../../boot";

const state = () => ({
  logList: {},
  logEndpoint: `${baseURL}/log`,
});

const getters = {
  getLogList: (state) => state.logList,
  getLogEndpoint: (state) => state.logEndpoint,
};

const mutations = {
  updateLogList(state, data) {
    state.logList = data;
  },
  updateLogEndpoint(state, data) {
    state.logEndpoint = data;
  },
};

const actions = {
  async fetchLogs(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .get(context.getters.getLogEndpoint, payload)
        .then((response) => {
          context.commit("updateLogList", response.data);
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async fetchLog(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .get(context.getters.getLogEndpoint + "/" + payload)
        .then((response) => {
          // context.commit("updateProjectList", response.data);
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async updateLog(context, payload) {
    let url = context.getters.getLogEndpoint + "/" + payload.id;
    return new Promise((resolve, reject) => {
      http
        .put(url, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async createLog(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .post(context.getters.getLogEndpoint, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async deleteLog(context, payload) {
    let url = context.getters.getLogEndpoint + "/" + payload;
    return new Promise((resolve, reject) => {
      http
        .delete(url, payload)
        .then(() => {
          resolve();
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
