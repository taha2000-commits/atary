import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { Trailer } from "../../types/trailer";
import type { Response } from "../../types/response";

export const getTrailers = async (
  id?: string,
): Promise<{ data: Response<Trailer> } | null> => {
  if (!id) return null;
  return await api.get(`https://api.rawg.io/api/games/${id}/movies`);
};

export const useTrailers = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`game-${id}-trailers`],
    queryFn: () => getTrailers(id),
  });
  return {
    data: data?.data,
    isLoadingTrailers: isLoading,
    trailers: data?.data.results,
  };
};
