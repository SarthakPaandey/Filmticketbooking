import axios from "axios";

// Create an Axios instance with default headers
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Replace with your actual base URL
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Request interceptor to add the Authorization header if the token is available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors and token refreshing
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const response = await axios.post(
          "http://localhost:3000/refresh-token",
          { token: refreshToken }
        );
        const newToken = response.data.token;
        localStorage.setItem("token", newToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        // Redirect to login or handle accordingly
      }
    }
    return Promise.reject(error);
  }
);
