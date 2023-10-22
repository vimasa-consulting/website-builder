import Authenticator from '@/components/Identity/Authenticator';
import Loader from '@/components/Loader';

export default function SignUpPage() {

  return (
    <div className="flex-grow max-w-screen-2xl mx-auto bg-white lg:flex gap-x-4">
      <div className="flex items-center justify-center py-10 lg:mx-10 lg:w-1/2">
        <Authenticator initialState='signUp'>
          <div className='relative h-full'>
            <Loader/>
          </div>
        </Authenticator>
      </div>
    </div>
  );
}