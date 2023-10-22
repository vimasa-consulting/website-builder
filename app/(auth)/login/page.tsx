import Authenticator from "@/components/Identity/Authenticator";
import Loader from "@/components/Loader";

export default function SignInPage() {
  return (
    <div className="flex-grow md:flex bg-white">
      <div className="flex items-center justify-center py-10 md:w-full">
        <Authenticator initialState='signIn'>
          <Loader/>
        </Authenticator>
      </div>
    </div>
  );
}