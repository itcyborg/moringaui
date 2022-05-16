<template>
  <div class="home">
    <div class="container p-5">
      <div class="row p-5 m-5">
        <div class="card">
          <div class="card-header row">
            <span class="col-10"> Logs </span>
            <router-link class="btn btn-primary col-2" to="/log/create"
              >Create</router-link
            >
          </div>
          <div class="card-body">
            <h5 class="card-title">Available Logs</h5>
            <div class="card-text">
              <table class="table">
                <thead>
                  <th>#</th>
                  <th>Level</th>
                  <th>Subject</th>
                  <th>Content</th>
                  <th>Origin</th>
                  <th>Status</th>
                  <th>Created at</th>
                </thead>
                <tbody>
                  <tr v-for="log in logs" :key="log.id">
                    <td>{{ log.id }}</td>
                    <td>{{ log.level }}</td>
                    <td>{{ log.content }}</td>
                    <td>{{ log.origin }}</td>
                    <td>{{ log.status }}</td>
                    <td>{{ log.createdAt }}</td>
                    <td>
                      <router-link
                        :to="'/log/edit/' + log.id"
                        class="btn btn-primary btn-sm m-1"
                        >Edit</router-link
                      >
                      <button
                        class="btn btn-danger btn-sm m-1"
                        @click="deleteLog(log.id)"
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
const logs = ref([]);

onMounted(() => {
  listLogs();
});

const listLogs = async () => {
  store
    .dispatch("logs/fetchLogs")
    .then((result) => {
      logs.value = result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteLog = async (log_id) => {
  store
    .dispatch("logs/deleteLog", log_id)
    .then(() => {
      listLogs();
    })
    .catch((error) => {
      listLogs();
      console.log(error);
    });
};
</script>
