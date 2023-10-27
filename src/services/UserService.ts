import { create, getBySub } from "@/adapters/api/core/users";

// TODO: error handling etc..

export async function createUser() {
  return create();
}

export async function getUserBySub(userSub: string) {
  return getBySub(userSub);
}