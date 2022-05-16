import { baseURL, http } from "../../boot";

const state = () => ({
  issueList: {},
  issueEndpoint: `${baseURL}/issue`,
});

const getters = {
  getIssueList: (state) => state.issueList,
  getIssueEndpoint: (state) => state.issueEndpoint,
};

const mutations = {
  updateIssueList(state, data) {
    state.issueList = data;
  },
  updateIssueEndpoint(state, data) {
    state.issueList = data;
  },
};

const actions = {
  async fetchIssues(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .get(context.getters.getIssueEndpoint, payload)
        .then((response) => {
          context.commit("updateIssueList", response.data);
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async fetchIssue(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .get(context.getters.getIssueEndpoint + "/" + payload)
        .then((response) => {
          // context.commit("updateProjectList", response.data);
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async updateIssue(context, payload) {
    let url = context.getters.getIssueEndpoint + "/" + payload.id;
    return new Promise((resolve, reject) => {
      http
        .put(url, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async createIssue(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .post(context.getters.getIssueEndpoint, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async deleteIssue(context, payload) {
    let url = context.getters.getIssueEndpoint + "/" + payload;
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
