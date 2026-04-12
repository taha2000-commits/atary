import { useQuery } from "@tanstack/react-query";

import { api } from "./api";
import type { Developer } from "../../types/game";

export const getDeveloper = async (
  id?: string,
): Promise<{
  data: Developer;
  status: string;
} | null> => {
  if (!id) return null;
  return await api.get(`/developers/${id}`);
};

export const useDeveloper = (id?: string) => {
  const query = useQuery({
    queryKey: [`developer`, id],
    queryFn: () => getDeveloper(id),
  });
  return {
    ...query,
    developer: {
      ...query.data?.data,
    },
  };
};
