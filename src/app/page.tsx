'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import AuthWrapper from "@/components/Identity/AuthWrapper";
import { ROUTES } from "@/services/NavigationService";

function Redirect() {

  const router  = useRouter();

  useEffect(() => {
    router.replace(ROUTES.GET_STARTED);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <></>
  )
}

function HomePage() {
  return (
    <AuthWrapper>
      <Redirect />
    </AuthWrapper>
  )
}

export default HomePage;