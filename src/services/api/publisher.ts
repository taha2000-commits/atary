import { useQuery } from "@tanstack/react-query";

import { api } from "./api";
import type { Publisher } from "../../types/game";

export const getPublisher = async (
  id?: string,
): Promise<{
  data: Publisher;
  status: string;
} | null> => {
  if (!id) return null;
  return await api.get(`/publishers/${id}`);
};

export const usePublisher = (id?: string) => {
  const query = useQuery({
    queryKey: [`publisher`, id],
    queryFn: () => getPublisher(id),
  });
  return {
    ...query,
    publisher: {
      ...query.data?.data,
    },
  };
};
