import { api } from "./api";

export const getGames = async () => {
  return await api.get("/games", {
    params: {
      page: 1,
      page_size: 5,
    },
  });
};
