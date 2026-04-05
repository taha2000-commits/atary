import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api, DEV_MODE } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Developer } from "../../types/game";
import { DEVELOPMENT_TEAM_PLACEHOLDER } from "../../placeholders/development-team";

export const getDevelopmentTeam = async (
  id?: string,
  params?: RequestParams,
): Promise<{ data: Response<Developer> } | null> => {
  if (!id) return null;
  return await api.get(`https://api.rawg.io/api/games/${id}/development-team`, {
    params,
  });
};

export const useDevelopmentTeam = (id?: string, params?: RequestParams) => {
  const { data, isLoading, isPlaceholderData } = useQuery({
    queryKey: [`development-team-of-game-${id}`, params || {}],
    queryFn: () => {
      if (DEV_MODE) {
        return new Promise((res) =>
          res({
            data: {
              results: params
                ? DEVELOPMENT_TEAM_PLACEHOLDER.slice(
                    params?.page_size * (params?.page - 1),
                    params?.page_size * params?.page,
                  )
                : DEVELOPMENT_TEAM_PLACEHOLDER,
            },
          }),
        );
      } else return getDevelopmentTeam(id, params);
    },
    placeholderData: keepPreviousData,
  });
  return {
    data: (data as AxiosResponse)?.data,
    isLoadingDevelopmentTeam: isLoading,
    developmentTeam: (data as AxiosResponse)?.data.results as Developer[],
    isPlaceholderData,
  };
};
