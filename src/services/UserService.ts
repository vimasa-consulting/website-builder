import { getBySub } from "@/adapters/api/core/users";

export async function getUserBySub(userSub: string) {
  // TODO: error handling etc..
  return getBySub(userSub);
}