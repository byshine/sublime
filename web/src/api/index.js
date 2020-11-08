const axios = require("axios");

export function collaborate(params) {
  return axios.post("/collaborate", params);
}

export function getPhotos() {
  return axios.get("/photos");
}
