import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ProjectsEditView from "../views/ProjectsEditView.vue";
import ProjectsCreateView from "../views/ProjectsCreateView.vue";
import IssuesEditView from "../views/IssuesEditView.vue";
import IssuesView from "../views/IssuesView.vue";
import IssuesCreateView from "../views/IssuesCreateView.vue";
import LogsView from "../views/LogsView.vue";
import LogsCreateView from "../views/LogsCreateView.vue";
import LogsEditView from "../views/LogsEditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
  {
    path: "/project/edit/:project",
    name: "projects-view",
    component: ProjectsEditView,
  },
  {
    path: "/project/create",
    name: "projects-crete",
    component: ProjectsCreateView,
  },
  {
    path: "/issues",
    name: "issues",
    component: IssuesView,
  },
  {
    path: "/issue/edit/:issue",
    name: "issue-view",
    component: IssuesEditView,
  },
  {
    path: "/issue/create",
    name: "issue-create",
    component: IssuesCreateView,
  },
  {
    path: "/logs",
    name: "logs",
    component: LogsView,
  },
  {
    path: "/log/edit/:log",
    name: "log-view",
    component: LogsEditView,
  },
  {
    path: "/log/create",
    name: "log-create",
    component: LogsCreateView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
