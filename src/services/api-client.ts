import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3317b305099440b69190c1ddc6d95d14",
  },
});

export default apiClient;
