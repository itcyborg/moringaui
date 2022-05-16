<template>
  <div class="home">
    <div class="container p-5">
      <div class="row p-5 m-5">
        <div class="card">
          <div class="card-header row">
            <span class="col-10"> Issues </span>
            <router-link class="btn btn-primary col-2" to="/issue/create"
              >Create</router-link
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">Available Issues</h5>
            <div class="card-text">
              <table class="table">
                <thead>
                  <th>#</th>
                  <th>Subject</th>
                  <th>Description</th>
                  <th>Severity</th>
                  <th>Created at</th>
                  <th>Actions</th>
                </thead>
                <tbody>
                  <tr v-for="issue in issues" :key="issue.id">
                    <td>{{ issue.id }}</td>
                    <td>{{ issue.subject }}</td>
                    <td>{{ issue.description }}</td>
                    <td>
                      <span v-if="issue.severity === 1">Info</span>
                      <span v-if="issue.severity === 2">Low</span>
                      <span v-if="issue.severity === 3">Normal</span>
                      <span v-if="issue.severity === 4">High</span>
                      <span v-if="issue.severity === 5">Critical</span>
                    </td>
                    <td>{{ issue.createdAt }}</td>
                    <td>
                      <router-link
                        :to="'/issue/edit/' + issue.id"
                        class="btn btn-primary btn-sm m-1"
                        >Edit</router-link
                      >
                      <button
                        class="btn btn-danger btn-sm m-1"
                        @click="deleteIssue(issue.id)"
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
const issues = ref([]);

onMounted(() => {
  listIssues();
});

const listIssues = async () => {
  store
    .dispatch("issues/fetchIssues")
    .then((result) => {
      issues.value = result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteIssue = async (project_id) => {
  store
    .dispatch("issues/deleteIssue", project_id)
    .then(() => {
      listIssues();
    })
    .catch((error) => {
      listIssues();
      console.log(error);
    });
};
</script>
