import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Store } from "../../types/game";

export const getStores = async (
  params?: RequestParams,
): Promise<{ data: Response<Store> } | null> => {
  return await api.get(`/stores`, { params });
};

export const useStores = (params?: RequestParams) => {
  const query = useQuery({
    queryKey: [`stores`, params || {}],
    queryFn: () => getStores(params),
    placeholderData: keepPreviousData,
  });
  return {
    ...query,
    isLoadingStores: query?.isLoading,
    stores: (query?.data as AxiosResponse)?.data.results as Store[],
    number_pages: Math.ceil(
      (query?.data as AxiosResponse)?.data.count / (params?.page_size || 10),
    ),
  };
};
