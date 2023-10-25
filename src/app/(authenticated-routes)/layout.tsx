import AuthWrapper from "@/components/Identity/AuthWrapper"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      {children}
    </AuthWrapper>
  )
}
