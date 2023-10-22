import HomePageView from "@/src/components/HomePage";
import AuthWrapper from "@/src/components/Identity/AuthWrapper";

function HomePage() {
  return (
    <AuthWrapper>
      <HomePageView />
    </AuthWrapper>
  )
}

export default HomePage;