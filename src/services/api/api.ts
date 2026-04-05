import axios from "axios";
// export const DEV_MODE = false;
export const DEV_MODE = true;
export const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});
