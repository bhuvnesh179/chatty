import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-be-hxxr.onrender.com/api",
  withCredentials: true,
});