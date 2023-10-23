'use client'

import AuthWrapper from "@/components/Identity/AuthWrapper";
import { ROUTES } from "@/services/NavigationService";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Redirect() {

  const router  = useRouter();

  useEffect(() => {
    router.replace(ROUTES.DASHBOARD);
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