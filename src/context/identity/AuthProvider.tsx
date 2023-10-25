import { AuthStatus, AuthUser } from "@/types/identity";
import { Auth, Hub } from "aws-amplify";

import React, { useEffect, useState } from "react";
import AuthContext from "@/context/identity/AuthContext";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {

  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.configuring);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  const loadCurrentUserInfo = () => {
    Auth.currentUserInfo()
      .then((userInfo) => {
        console.log('Updating auth user context', userInfo);
        setAuthUser({
          username: userInfo.username,
          attributes: {
            sub: userInfo.attributes?.sub,
            email: userInfo.attributes?.email,
            givenName: userInfo.attributes?.given_name,
            familyName: userInfo.attributes?.family_name,
          }
        });
        setAuthStatus(AuthStatus.authenticated);
      })
      .catch(() => {
        setAuthStatus(AuthStatus.unauthenticated);
        setAuthUser(null);
      });
  };

  useEffect(() => {
    loadCurrentUserInfo();
    const onSignIn = () => {
      loadCurrentUserInfo();
    };
    const onSignOut = () => {
      setAuthStatus(AuthStatus.unauthenticated);
      setAuthUser(null);
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
    <AuthContext.Provider value={{ status: authStatus, cachedUser: authUser }}>
      {children}
    </AuthContext.Provider>
  )
}