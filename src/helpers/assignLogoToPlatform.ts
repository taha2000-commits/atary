import type { PlatformInfo } from "../types/game";
import { PLATFORM_LOGOS } from "./consts";

export const assignLogoToPlatform = (platform: PlatformInfo) => {
  const slug = platform.slug.toLowerCase();

  const match = Object.keys(PLATFORM_LOGOS).find((key) => slug.includes(key));

  return match ? PLATFORM_LOGOS[match] : "";
};
