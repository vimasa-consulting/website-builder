'use client'

import { useContext, useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import { useRouter } from 'next/navigation'

import awsExports from "../../aws-exports";
import { ROUTES } from "../../services/NavigationService";
import Loader from "../Loader";
import AuthProvider from "@/context/identity/AuthProvider";
import { AuthContext } from "@/context/identity/AuthContext";
import { AuthStatus } from "@/types/identity";

Amplify.configure({ ...awsExports, ssr: true });

function AuthRouter(props: { children: React.ReactNode }) {

  const { status } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (status === AuthStatus.unauthenticated) {
      console.log('Redirecting for sign in');
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