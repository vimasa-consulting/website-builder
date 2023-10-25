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
    familyName: string
  }
}

export type AuthProps = {
  status: AuthStatus;
  cachedUser: AuthUser | null
}