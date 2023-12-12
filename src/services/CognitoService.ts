import { Auth } from "aws-amplify";

async function updateUserName(username: string, givenName: string, familyName: string): Promise<void> {
  try {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
      'given_name': givenName,
      'family_name': familyName
    });
  } catch (error) {
    console.error(error); 
  }
}

async function changePassword(oldPassword: string, newPassword: string): Promise<void> {

  try {
    const user = await Auth.currentAuthenticatedUser();
    const response = await Auth.changePassword(user, oldPassword, newPassword)
    console.log(response); 
  } catch (error) {
    console.error(error);
  }
}

export {
    updateUserName,
    changePassword
}

// changePassword('user-access-token', 'oldPassword123', 'newPassword123');
