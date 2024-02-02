"use client";

import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import { useContext, useState } from "react";
// import Image from "next/image";

import AuthContext from "@/context/identity/AuthContext";
import { signOut } from "@/services/AuthService";
import { ROUTES } from "@/services/NavigationService";
import ProfilePopup from "../Profile/ProfilePopup";

export default function Navbar() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const { cachedAuthUser } = useContext(AuthContext);

  const openProfilePopup = () => {
    setShowProfileModal(true);
  };

  return (
    <FlowbiteNavbar
      fluid={true}
      rounded={false}
      className="bg-black m-1 navbarBackground"
    >
      <FlowbiteNavbar.Brand href={ROUTES.GET_STARTED}>
        {/* <Image
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          width={100}
          height={100}
          alt="Website Builder Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/redux.png"
            alt="redux"
          />
        </span>
      </FlowbiteNavbar.Brand>
      <div className="flex gap-4">
        <Avatar
          className="cursor-pointer"
          onClick={openProfilePopup}
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        />
        <div className="flex flex-col">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <p className="block text-[16px]">
                {cachedAuthUser?.attributes.givenName}{" "}
                {cachedAuthUser?.attributes.familyName}
              </p>
            }
          >
            <Dropdown.Item onClick={openProfilePopup}>Settings</Dropdown.Item>
            <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
          </Dropdown>
          <p className="block truncate text-[10px] font-medium text-[#BDBDBD]">
            {cachedAuthUser?.attributes.email}
          </p>
        </div>
      </div>
      {showProfileModal && (
        <ProfilePopup closeHandler={() => setShowProfileModal(false)} />
      )}
    </FlowbiteNavbar>
  );
}
