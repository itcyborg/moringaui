<template>
  <div class="home">
    <div class="container p-5">
      <div class="row p-5 m-5">
        <div class="card">
          <div class="card-header row">
            <span class="col-10"> Edit Project </span>
            <router-link class="btn btn-primary col-2" to="/projects"
              >Back</router-link
            >
          </div>
          <div class="card-body">
            <form action="#" @submit.prevent="updateProject(project_id)">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="name"
                  v-model="project.name"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea
                  class="form-control"
                  v-model="project.description"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted, reactive, ref } from "vue";
const store = useStore();

const router = useRouter();

/**
 * Constants to hold data
 */

const project_id = ref(router.currentRoute.value.params.project);
const project = reactive({
  id: project_id.value,
  name: "",
  description: "",
});

onMounted(() => {
  fetchProject(project_id);
});

const fetchProject = async (project_id) => {
  store
    .dispatch("projects/fetchProject", project_id.value)
    .then((result) => {
      project.name = result.name;
      project.description = result.description;
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateProject = async () => {
  store
    .dispatch("projects/updateProject", project)
    .then(() => {
      fetchProject(project_id);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
