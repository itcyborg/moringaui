<template>
  <div class="home">
    <div class="container p-5">
      <div class="row p-5 m-5">
        <div class="col-4">
          <h4>{{ stats.projects }}</h4>
          <h2>Projects</h2>
        </div>
        <div class="col-4">
          <h4>{{ stats.issues }}</h4>
          <h2>Issues</h2>
        </div>
        <div class="col-4">
          <h4>{{ stats.logs }}</h4>
          <h2>Logs</h2>
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
const stats = ref({
  issues: 0,
  projects: 0,
  logs: 0,
});

onMounted(() => {
  getStats();
});

const getStats = async () => {
  store
    .dispatch("stats/fetchStats")
    .then((result) => {
      stats.value = result;
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
