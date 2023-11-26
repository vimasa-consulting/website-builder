import { create, getCurrent } from "@/adapters/api/core/users";

// TODO: error handling etc..

export async function createUser() {
  return create();
}

export async function getCurrentUser() {
  return getCurrent();
}