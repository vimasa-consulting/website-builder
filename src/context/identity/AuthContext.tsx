import React from 'react';

import { AuthProps, AuthStatus } from '@/types/identity';

const AuthContext = React.createContext<AuthProps>({status: AuthStatus.configuring, cachedUser: null });

export default AuthContext;