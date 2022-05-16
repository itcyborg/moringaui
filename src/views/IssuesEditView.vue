<template>
  <div class="home">
    <div class="container p-5">
      <div class="row p-5 m-5">
        <div class="card">
          <div class="card-header row">
            <span class="col-10"> Edit Issue </span>
            <router-link class="btn btn-primary col-2" to="/issues"
              >Back</router-link
            >
          </div>
          <div class="card-body">
            <form action="#" @submit.prevent="updateIssue(issue_id)">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Subject</label
                >
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="name"
                  v-model="issue.subject"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Project</label>
                <select class="form-select" v-model="issue.project_id">
                  <option value="" disabled>Select project</option>
                  <option
                    v-for="project in projects"
                    :key="project.id"
                    :value="project.id"
                  >
                    {{ project.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Severity</label>
                <select class="form-select" v-model="issue.severity">
                  <option value="" disabled>Select severity</option>
                  <option value="1">Info</option>
                  <option value="2">Low</option>
                  <option value="3">Normal</option>
                  <option value="4">High</option>
                  <option value="5">Critical</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea
                  class="form-control"
                  v-model="issue.description"
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

const issue_id = ref(router.currentRoute.value.params.issue);
const issue = reactive({
  id: issue_id.value,
  subject: "",
  description: "",
  project_id: "",
  severity: "",
});
const projects = ref([]);

onMounted(() => {
  fetchIssue(issue_id);
  fetchProjects();
});

const fetchIssue = async (issue_id) => {
  store
    .dispatch("issues/fetchIssue", issue_id.value)
    .then((result) => {
      issue.subject = result.subject;
      issue.description = result.description;
      issue.severity = result.severity;
      issue.project_id = result.project_id;
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchProjects = async () => {
  store
    .dispatch("projects/fetchProjects")
    .then((result) => {
      projects.value = result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateIssue = async () => {
  store
    .dispatch("issues/updateIssue", issue)
    .then(() => {
      fetchIssue(issue_id);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
