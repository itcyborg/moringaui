import { baseURL, http } from "../../boot";
// import { useRouter } from "vue-router";

const state = () => ({
  projectList: {},
  projectEndpoint: `${baseURL}/project`,
});

const getters = {
  getProjectList: (state) => state.projectList,
  getProjectEndpoint: (state) => state.projectEndpoint,
};

const mutations = {
  updateProjectList(state, data) {
    state.projectList = data;
  },
  updateProjectEndpoint(state, data) {
    state.projectList = data;
  },
};

const actions = {
  async fetchProjects(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .get(context.getters.getProjectEndpoint, payload)
        .then((response) => {
          context.commit("updateProjectList", response.data);
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async fetchProject(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .get(context.getters.getProjectEndpoint + "/" + payload)
        .then((response) => {
          // context.commit("updateProjectList", response.data);
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async updateProject(context, payload) {
    let url = context.getters.getProjectEndpoint + "/" + payload.id;
    return new Promise((resolve, reject) => {
      http
        .put(url, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async createProject(context, payload) {
    return new Promise((resolve, reject) => {
      http
        .post(context.getters.getProjectEndpoint, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error));
    });
  },
  async deleteProject(context, payload) {
    let url = context.getters.getProjectEndpoint + "/" + payload;
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
