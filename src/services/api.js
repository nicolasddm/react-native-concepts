import axios from "axios";

const api = axios.create({
  baseURL: "http://182.168.3.106:3333",
});

export default api;
