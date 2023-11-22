import { Auth } from "aws-amplify"
import { User } from "@/types/user";
import { create as createUser, getCurrent } from "@/adapters/api/core/users";
import { create as createOrganization } from "@/adapters/api/core/organizations";

export const signOut = async () => {
  return Auth.signOut();
}

export const postSignInActions = async () => {
  const authUserInfo = await Auth.currentUserInfo();
  const currentUserResponse = await getCurrent().catch(() => { });
  let dbUser: User = currentUserResponse?.data;
  if (!dbUser) {
    // create user
    const createUserResponse = await createUser();
    dbUser = createUserResponse.data;
    console.log('Created db user', dbUser);
  } else {
    console.log('Found db user', dbUser);
  }
  if (!dbUser.organizations.length) {
    // create org
    const createOrgResponse = await createOrganization({
      name: `${authUserInfo.attributes?.given_name} ${authUserInfo.attributes?.family_name}'s Workspace`
    });
    console.log('Created org', createOrgResponse.data);
  } else {
    console.log('Org exists');
  }
}