import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-backend-55va.onrender.com/api",
  withCredentials: true,
});