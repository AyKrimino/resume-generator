import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://resume-generator-00w9.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default apiClient;
