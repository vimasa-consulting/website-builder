import { User } from "./user"

export enum AuthStatus {
  'configuring',
  'authenticated',
  'unauthenticated'
}

export type AuthUser = {
  username: string,
  attributes: {
    sub: string,
    email: string,
    givenName: string,
    familyName: string,
    profileImage: string
  },
}

export type AuthProps = {
  status: AuthStatus,
  cachedAuthUser: AuthUser | null,
  cachedUser: User | null,
  setCachedAuthUser: (value: React.SetStateAction<AuthUser | null>) => void
}