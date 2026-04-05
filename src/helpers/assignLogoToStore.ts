import type { StoreKey } from "../types/game";
import { STORE_LOGOS } from "./consts";

export const assignLogoToStore = (store: { slug: string }) => {
  if (!store?.slug) return undefined;

  const slug = store.slug.toLowerCase();

  const match = Object.keys(STORE_LOGOS).find((key) => slug.includes(key));

  return match ? STORE_LOGOS[match as StoreKey] : undefined;
};
