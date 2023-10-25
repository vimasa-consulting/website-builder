import Authenticator from '@/components/Identity/Authenticator';
import Loader from '@/components/Loader';

export default function Page() {

  return (
    <div className="flex-grow md:flex">
      <div className="flex items-center justify-center py-10 md:w-full">
        <Authenticator initialState='signUp'>
          <Loader />
        </Authenticator>
      </div>
    </div>
  );
}