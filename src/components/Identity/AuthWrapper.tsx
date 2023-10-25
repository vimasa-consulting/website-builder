'use client'

import { useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import { useRouter } from 'next/navigation'

import awsExports from "../../aws-exports";
import { ROUTES } from "../../services/NavigationService";
import Loader from "../Loader";

Amplify.configure({ ...awsExports, ssr: true });

function AuthWrapper(props: { children: React.ReactNode }) {

  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    async function ensureLoggedIn() {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        console.log('Logged in user', authUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.log('Redirecting for sign in', error);
        router.push(ROUTES.SIGN_IN);
      }
    }

    ensureLoggedIn();
    // ignore router dep warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isAuthenticated ? props.children : <Loader />;
}

export default AuthWrapper;