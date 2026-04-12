import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { Tag } from "../../types/game";

export const getTag = async (
  id?: string,
): Promise<{
  data: Tag;
  status: string;
} | null> => {
  if (!id) return null;
  return await api.get(`/tags/${id}`);
};

export const useTag = (id?: string) => {
  const query = useQuery({
    queryKey: [`tag`, id],
    queryFn: () => getTag(id),
  });
  return {
    ...query,
    tag: {
      ...query.data?.data,
    },
  };
};
