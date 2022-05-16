<template>
  <div class="home">
    <div class="container p-5">
      <div class="row p-5 m-5">
        <div class="card">
          <div class="card-header row">
            <span class="col-10"> Create Project </span>
            <router-link class="btn btn-primary col-2" to="/projects"
              >Back</router-link
            >
          </div>
          <div class="card-body">
            <form action="#" @submit.prevent="createProject">
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
import { onMounted, reactive } from "vue";
const store = useStore();

const router = useRouter();

/**
 * Constants to hold data
 */

const project = reactive({
  name: "",
  description: "",
});

onMounted(() => {});

const createProject = async () => {
  store
    .dispatch("projects/createProject", project)
    .then(() => {
      router.push("/projects");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
