'use client'

import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import { useContext } from "react";
// import Image from "next/image";

import AuthContext from "@/context/identity/AuthContext";
import { signOut } from "@/services/IdentityService";
import { ROUTES } from "@/services/NavigationService";

export default function Navbar() {

  const { cachedUser } = useContext(AuthContext);

  return (
    <FlowbiteNavbar
      fluid={true}
      rounded={false}
      className="bg-black m-5"
    >
      <FlowbiteNavbar.Brand href={ROUTES.PROJECTS}>
        {/* <Image
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          width={100}
          height={100}
          alt="Website Builder Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Website Builder
        </span>
      </FlowbiteNavbar.Brand>
      <div className="flex gap-4">
        <Dropdown
          arrowIcon={true}
          inline
          label={
            <div>
              Workspace 1
            </div>
          }
        >
          <Dropdown.Item>Workspace 2</Dropdown.Item>
          <Dropdown.Item>Workspace 3</Dropdown.Item>
          <Dropdown.Item>Workspace 4</Dropdown.Item>
        </Dropdown>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{cachedUser?.attributes.givenName} {cachedUser?.attributes.familyName}</span>
            <span className="block truncate text-sm font-medium">{cachedUser?.attributes.email}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={signOut}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </FlowbiteNavbar>
  );
}
