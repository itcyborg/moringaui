<template>
  <div class="home">
    <div class="container p-5">
      <div class="row p-5 m-5">
        <div class="card">
          <div class="card-header row">
            <span class="col-10"> Projects </span>
            <router-link class="btn btn-primary col-2" to="/project/create"
              >Create</router-link
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">Available Projects</h5>
            <div class="card-text">
              <table class="table">
                <thead>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Created at</th>
                  <th>Actions</th>
                </thead>
                <tbody>
                  <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>{{ project.description }}</td>
                    <td>{{ project.createdAt }}</td>
                    <td>
                      <router-link
                        :to="'/project/edit/' + project.id"
                        class="btn btn-primary btn-sm m-1"
                        >Edit</router-link
                      >
                      <button
                        class="btn btn-danger btn-sm m-1"
                        @click="deleteProject(project.id)"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref, watchEffect } from "vue";
// import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
// const router = useRouter();
const store = useStore();

/**
 * Constants to hold data
 */
const projects = ref([]);

onMounted(() => {
  listProjects();
});

const listProjects = async () => {
  store
    .dispatch("projects/fetchProjects")
    .then((result) => {
      projects.value = result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteProject = async (project_id) => {
  store
    .dispatch("projects/deleteProject", project_id)
    .then(() => {
      listProjects();
    })
    .catch((error) => {
      listProjects();
      console.log(error);
    });
};
</script>
