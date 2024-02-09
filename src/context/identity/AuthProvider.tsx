import { AuthStatus, AuthUser } from "@/types/identity";
import { Auth, Hub, Storage } from "aws-amplify";

import React, { useEffect, useState } from "react";
import AuthContext from "@/context/identity/AuthContext";
import { getCurrentUser } from "@/services/UserService";
import { User } from "@/types/user";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {

  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.configuring);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<User | null>(null);


  const loadCurrentUserInfo = async () => {
    try {
      const authUserInfo = await Auth.currentUserInfo();
      const { data: dbUser } = await getCurrentUser();
      const updatedProfileImage = await Storage.get(dbUser?._id)
      const defaultImageURL = 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
      setAuthUser({
        username: authUserInfo.username,
        attributes: {
          sub: authUserInfo.attributes?.sub,
          email: authUserInfo.attributes?.email,
          givenName: authUserInfo.attributes?.given_name,
          familyName: authUserInfo.attributes?.family_name,
          profileImage: updatedProfileImage || defaultImageURL
        },
      });
      setUser(dbUser);
      setAuthStatus(AuthStatus.authenticated);
    } catch (error) {
      setAuthStatus(AuthStatus.unauthenticated);
      setAuthUser(null);
      setUser(null);
    }
  };

  useEffect(() => {
    loadCurrentUserInfo();
    const onSignIn = () => {
      loadCurrentUserInfo();
    };
    const onSignOut = () => {
      setAuthStatus(AuthStatus.unauthenticated);
      setAuthUser(null);
      setUser(null);
    };
    const unsubscribe = Hub.listen('auth', (data) => {
      const { payload } = data;
      if (payload?.event === 'signIn') {
        onSignIn();
      } else if (payload?.event === 'signOut') {
        onSignOut();
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ status: authStatus, cachedAuthUser: authUser, cachedUser: user, setCachedAuthUser: setAuthUser }}>
      {children}
    </AuthContext.Provider>
  )
}