import { useQuery } from "@tanstack/react-query";
import type { StoreInfo } from "../../types/game";
import { api } from "./api";

export const getStore = async (
  id?: string,
): Promise<{
  data: StoreInfo;
  status: string;
} | null> => {
  if (!id) return null;
  return await api.get(`/stores/${id}`);
};

export const useStore = (id?: string) => {
  const query = useQuery({
    queryKey: [`store`, id],
    queryFn: () => getStore(id),
  });
  return {
    ...query,
    store: {
      ...query.data?.data,
    },
  };
};
