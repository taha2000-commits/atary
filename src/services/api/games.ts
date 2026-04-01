import { api } from "./api";

export const getGames = async () => {
  return await api.get("https://api.rawg.io/api/games", {
    params: {
      page: 1,
      page_size: 5,
    },
  });
};
