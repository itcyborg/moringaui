import { createStore } from "vuex";
import issues from "../store/modules/issues";
import stats from "../store/modules/stats";
import projects from "../store/modules/projects";
import logs from "../store/modules/logs";

const store = createStore({
  modules: {
    issues,
    stats,
    projects,
    logs,
  },
});

export default store;
