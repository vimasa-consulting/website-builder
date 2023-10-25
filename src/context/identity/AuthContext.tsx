import React from 'react';
import { AuthProps, AuthStatus } from '@/types/identity';

export const AuthContext = React.createContext<AuthProps>({status: AuthStatus.configuring, cachedUser: null });