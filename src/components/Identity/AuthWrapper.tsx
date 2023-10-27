'use client'

import { useContext, useEffect } from "react";
import { Amplify } from "aws-amplify";
import { useRouter } from 'next/navigation'

import awsExports from "@/aws-exports";
import { ROUTES } from "@/services/NavigationService";
import Loader from "@/components/Loader";
import AuthProvider from "@/context/identity/AuthProvider";
import AuthContext from "@/context/identity/AuthContext";
import { AuthStatus } from "@/types/identity";
import { signOut } from "@/services/IdentityService";

Amplify.configure({ ...awsExports, ssr: true });

function AuthRouter(props: { children: React.ReactNode }) {

  const { status } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (status === AuthStatus.unauthenticated) {
      console.log('Redirecting for sign in');
      // ensure fully signed out
      signOut().catch(() => {
        // ignore 
      });
      router.push(ROUTES.SIGN_IN);
    }
    // ignore router dep warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return status === AuthStatus.authenticated ? props.children : <Loader />;
}

function AuthWrapper(props: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <AuthRouter>
        {props.children}
      </AuthRouter>
    </AuthProvider>
  );
}

export default AuthWrapper;