import HomePageView from "@/components/HomePage";
import AuthWrapper from "@/components/Identity/AuthWrapper";

function HomePage() {
  return (
    <AuthWrapper>
      <HomePageView />
    </AuthWrapper>
  )
}

export default HomePage;