const axios = require("axios");

export function collaborate(params) {
  return axios.post("/api/collaborate", params);
}
