import axios from "axios";

// Use environment variable or default to localhost for development
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request interceptor - add token to headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Response interceptor - handle token expiry
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

export default API;
