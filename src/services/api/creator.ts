import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { Creator, PlatformResult } from "../../types/creator";
import { assignLogoToPlatform } from "../../helpers/assignLogoToPlatform";

export const getCreator = async (
  id?: string,
): Promise<{
  data: Creator;
  status: string;
} | null> => {
  if (!id) return null;
  return await api.get(`/creators/${id}`);
};

const addLogoToPlatforms = (arr: PlatformResult[] = []) => {
  return arr.map((platform) => {
    return { ...platform, logo: assignLogoToPlatform(platform.platform) };
  });
};
export const useCreator = (id?: string) => {
  const query = useQuery({
    queryKey: [`creator`, id],
    queryFn: () => getCreator(id),
  });
  return {
    ...query,
    creator: {
      ...query.data?.data,
      platforms: {
        ...query.data?.data?.platforms?.results,
        results: addLogoToPlatforms(query.data?.data?.platforms?.results),
      },
    },
  };
};
