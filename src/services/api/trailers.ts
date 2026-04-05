import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { api, DEV_MODE } from "./api";
import type { Trailer } from "../../types/trailer";
import type { RequestParams, Response } from "../../types/response";
import { TRAILERS_PLACEHOLDER } from "../../helpers/consts";
import type { AxiosResponse } from "axios";

export const getTrailers = async (
  id?: string,
  params?: RequestParams,
): Promise<{ data: Response<Trailer> } | null> => {
  if (!id) return null;
  return await api.get(`https://api.rawg.io/api/games/${id}/movies`, {
    params,
  });
};

export const useTrailers = (id?: string, params?: RequestParams) => {
  const { data, isLoading } = useQuery({
    queryKey: [`game-${id}-trailers`, params || {}],
    queryFn: () => {
      if (DEV_MODE) {
        return new Promise((res) =>
          res({
            data: { results: TRAILERS_PLACEHOLDER.slice(0, params?.page_size) },
          }),
        );
      } else return getTrailers(id, params);
    },
  });
  return {
    data: (data as AxiosResponse)?.data,
    isLoadingTrailers: isLoading,
    trailers: (data as AxiosResponse)?.data.results as Trailer[],
  };
};

export const useInfinityTrailers = (params: RequestParams, id?: string) => {
  return useInfiniteQuery({
    queryKey: ["trailerss"],
    queryFn: ({ pageParam }) =>
      getTrailers(id, { page: pageParam, page_size: params.page_size }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.data.next) return null;

      const nextPage = parseInt(
        new URL(lastPage?.data.next).searchParams.get("page") || "",
      );

      return nextPage;
    },
  });
};
