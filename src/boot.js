import axios from "axios";
const baseURL = "http://localhost:3000";
// const baseURL = 'http://localhost:8000'
// const baseURL = 'api'

// const refreshEndPoint = 'http://localhost:8000/api/refresh-token'

// create axios object
let http = axios.create({
  // add headers here
  baseURL: baseURL,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  },
});

// add interceptors for 401 unauthorized request -- we assume the access_token expired
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-unused-vars
    const { config, response } = error;
    console.log("axios interceptor", response.status);

    // console.log('config at http interceptors', config)
    // if status 401 >> means token expired
    if (response && response.status === 401) {
      location.reload();
      location.replace("/");
      localStorage.clear();
      sessionStorage.clear();
    }
    // any other error status will be returned
    return Promise.reject(error);
  }
);

export { http, baseURL };
