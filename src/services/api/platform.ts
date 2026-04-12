import { useQuery } from "@tanstack/react-query";
import { api,  } from "./api";
import type { Game } from "../../types/game";

export type FullPlatform = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
  image: string | null;
  year_start: string | null;
  year_end: string | null;
  games: Game[];
};

export const getPlatform = async (
  id?: string,
): Promise<{
  data: FullPlatform;
  status: string;
} | null> => {
  if (!id) return null;
  return await api.get(`/platforms/${id}`);
};

export const usePlatform = (id?: string) => {
  const query = useQuery({
    queryKey: [`platform`, id],
    queryFn: () => getPlatform(id),
  });
  return {
    ...query,
    platform: {
      ...query.data?.data,
    },
  };
};
