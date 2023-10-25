import { Auth } from "aws-amplify"

export const signOut = async () => {
  return Auth.signOut();
}