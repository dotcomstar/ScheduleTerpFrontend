import axios from "axios";

const baseURL =
  "https://0gkd8gv6d7.execute-api.us-west-2.amazonaws.com/pre-alpha/";

export default axios.create({
  baseURL: baseURL,
});
