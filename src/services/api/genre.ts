import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

const getGenre = async (id?: string) => {
  if (!id) return null;
  return await api.get(`/genres/${id}`);
};

export const useGenre = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["genre", id],
    queryFn: () => getGenre(id),
  });
  return { genre: data?.data, isLoading };
};
