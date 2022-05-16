<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/fontawesome.min.css"
    integrity="sha384-zIaWifL2YFF1qaDiAo0JFgsmasocJ/rqu7LKYH8CoBEXqGbb9eO+Xi3s6fQhgFWM"
    crossorigin="anonymous"
  />
  <h3
    class="mt-5 text-uppercase card-title text-decoration-underline"
    style="text-align: center !important"
  >
    Issue & Log Management
  </h3>
  <div style="text-align: center !important">
    <div class="row">
      <div>
        <router-link class="p-3 text-capitalize text-start" to="/projects"
          >Projects</router-link
        >
        |
        <router-link class="p-3 text-capitalize text-start" to="/issues"
          >Issues</router-link
        >
        |
        <router-link class="p-3 text-capitalize text-start" to="/logs"
          >Logs</router-link
        >
      </div>
    </div>
  </div>
  <router-view />
</template>
