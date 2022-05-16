<template>
  <div class="home">
    <div class="container p-5">
      <div class="row p-5 m-5">
        <div class="card">
          <div class="card-header row">
            <span class="col-10"> Edit Log </span>
            <router-link class="btn btn-primary col-2" to="/logs"
              >Back</router-link
            >
          </div>
          <div class="card-body">
            <form action="#" @submit.prevent="updateLog(log_id)">
              <div class="mb-3">
                <label class="form-label">Level</label>
                <select class="form-select" v-model="log.level">
                  <option value="" disabled>Select Level</option>
                  <option value="1">Info</option>
                  <option value="2">Warning</option>
                  <option value="3">Error</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Subject</label
                >
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="name"
                  v-model="log.subject"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Content</label>
                <textarea class="form-control" v-model="log.content"></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Status</label>
                <select class="form-control" v-model="log.status">
                  <option value="" disabled>Select status</option>
                  <option value="0">Pending</option>
                  <option value="1">Solved</option>
                </select>
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

const log_id = ref(router.currentRoute.value.params.log);
const log = reactive({
  id: log_id,
  level: "",
  subject: "",
  content: "",
  status: "",
});

onMounted(() => {
  fetchLog(log_id);
});

const fetchLog = async () => {
  store
    .dispatch("logs/fetchLog", log_id.value)
    .then((result) => {
      log.subject = result.subject;
      log.content = result.content;
      log.status = result.status;
      log.level = result.level;
      log.id = result.id;
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateLog = async () => {
  store
    .dispatch("logs/updateLog", log)
    .then(() => {
      fetchLog(log_id);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
