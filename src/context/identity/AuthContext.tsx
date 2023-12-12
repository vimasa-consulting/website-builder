import React from 'react';

import { AuthProps, AuthStatus, AuthUser } from '@/types/identity';

const AuthContext = React.createContext<AuthProps>({
  status: AuthStatus.configuring, 
  cachedAuthUser: null, 
  cachedUser: null,
  setCachedAuthUser: (value: React.SetStateAction<AuthUser | null>) => null
});

export default AuthContext;