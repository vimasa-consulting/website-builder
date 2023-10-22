import Authenticator from '@/components/Identity/Authenticator';
import Image from 'next/image';
import signUpIllustration from '@/assets/images/signup-illustration.png'
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
      <div className="i relative hidden w-1/2 items-center justify-around overflow-hidden lg:flex">
        <div className='px-4'>
          {/* <Image
            src={signUpIllustration}
            alt="Sign Up illustration"
            className='object-contain'
          /> */}
          <div className="flex flex-col items-center text-center">
            <div className='text-2xl'>Optimise faster & better</div>
            <div className='mt-4'>Apps & tools to help optimise your marketing efforts.</div>
            <div>Powered by VIMASA.</div>
          </div>
        </div>
      </div>
    </div>
  );
}