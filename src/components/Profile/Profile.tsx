import AuthContext from '@/context/identity/AuthContext';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'


const Profile = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [profilePic, setProfilePic] = useState('https://flowbite.com/docs/images/people/profile-picture-5.jpg');
    const inputRef = useRef<HTMLInputElement>(null)
    const { cachedAuthUser } = useContext(AuthContext);


    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event: any) => {
                setProfilePic(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        if(inputRef.current) {
            inputRef?.current?.click()
        }
    };

    const handleProfileUpdate = () => {
        console.log('Profile updated')
    }

    const loadDependencies = useCallback(() => {
        setUserDetails({
            firstName: cachedAuthUser?.attributes?.givenName || '',
            lastName: cachedAuthUser?.attributes?.familyName || '',
            email: cachedAuthUser?.attributes?.email || ''
        })
    },[cachedAuthUser])

    useEffect(() => {
        if(cachedAuthUser) {
            loadDependencies()
        }
    }, [cachedAuthUser, loadDependencies])

  return (
    <div>
    <h2 className='text-[20px]'>Profile</h2>
    <div className='flex gap-[32px] mt-[24.5px]'>
        <div>
            {/* <img className="cursor-pointer w-[88px] h-[88px] rounded-full" alt="User settings" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" /> */}
            <img 
                id="profilePic" 
                src={profilePic} 
                alt="Profile Picture" 
                onClick={handleClick} 
                className='cursor-pointer w-[88px] h-[88px] rounded-full'
            />
            <input 
                type="file" 
                ref={inputRef}
                id="fileInput" 
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={handleImageChange}
            />
        </div>
        <div className='w-[277px]'>
            <div className='flex gap-[11px] mb-[15px]'>
                <div className="">
                    <div>
                        <label htmlFor="input-field-one" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">First Name</label>
                    </div>
                    <input
                        id='input-field-one'
                        type="text"
                        placeholder="First Name"
                        className="w-full h-[33px] p-2 border-2 border-transparent rounded text-[15px] text-white bg-[#313131]"
                        value={userDetails.firstName}
                        onChange={(e) => setUserDetails(prevState => ({...prevState, firstName: e.target.value}))}
                    />
                </div>
                <div className="">
                    <div>
                        <label htmlFor="input-field-two" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">Last Name</label>
                    </div>
                    <input
                        id="input-field-two"
                        type="text"
                        placeholder="Last Name"
                        className="w-full h-[33px] p-2 border-2 border-transparent rounded text-[15px] text-white bg-[#313131]"
                        value={userDetails.lastName}
                        onChange={(e) => setUserDetails(prevState => ({...prevState, lastName: e.target.value}))}
                    />
                </div>
            </div>
            <div className="mb-[30px]">
                    <div>
                        <label htmlFor="input-field-two" className="block mb-2 text-[12px] font-small text-[#797979] cursor-pointer">Email</label>
                    </div>
                    <input
                        id="input-field-two"
                        type="text"
                        className="w-full h-[33px] p-2 border-2 border-transparent text-[15px] rounded text-[#797979] bg-[#313131]"
                        value={userDetails.email}
                        readOnly
                    />
                </div>
            <button
                className="w-[138px] h-[33px] bg-[#DD00FF] text-white text-[15px] rounded hover:bg-hover cursor-pointer"
                onClick={handleProfileUpdate}
            >
                Update Profile
            </button>
        </div>
    </div>
</div>
  )
}

export default Profile