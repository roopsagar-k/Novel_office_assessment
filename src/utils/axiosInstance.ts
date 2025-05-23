import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);

    // Redirecting to internal error page for any error
    // if (typeof window !== "undefined") {
    //   window.location.href = "/error";
    // }

    return Promise.reject(error);
  }
);

export default axiosInstance;
