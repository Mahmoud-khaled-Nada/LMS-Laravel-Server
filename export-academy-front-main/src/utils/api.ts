import axios from "axios";
import Cookies from "js-cookie";
const { VITE_API_URL_DEV } = import.meta.env;

const api = axios.create({
  baseURL: VITE_API_URL_DEV,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("access_token");
    token ? (config.headers["Authorization"] = `Bearer ${token}`) : (location.href = "/login");
    return config;
  },
  (error) => {
    location.href = "/login";
    return Promise.reject(error);
  }
);


//TODOS (Start All App Endpoints)

// export const postLoginUserAPI = (data: UserParams) => api.post("/auth/login", data);
// export const postAddUserAPI = (data: UserParams) => api.post("/auth/create-user", data);
// export const getCourdrApi=()=>api.get("/course")
// export const getUserProfileAPI = () => api.get<User>("/profile");
// export const logoutUserAPI = () => api.post("/logout");







