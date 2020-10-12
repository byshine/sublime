const axios = require("axios");

export function collaborate(params) {
  return axios.post(
    "http://localhost:5001/classicstyle-2c480/us-central1/widgets/collaborate",
    params
  );
}
