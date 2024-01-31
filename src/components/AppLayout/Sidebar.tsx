"use client";

import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "@/services/NavigationService";
import styles from "@/styles/sidebar.module.css";
import ProfilePopup from "../Profile/ProfilePopup";
import { useState } from "react";

export default function Sidebar() {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const pathname = usePathname();

  // TODO: refactor items

  const openProfilePopup = () => {
    setShowProfileModal(true);
  };

  // useEffect(() => {
  //   document.onclick = function (event) {
  //     const e = event.target as HTMLTextAreaElement;
  //     if (e?.classList.length === 5) {
  //       setShowProfileModal(false);
  //     }
  //   };
  // });

  return (
    <FlowbiteSidebar
      aria-label="sidebar"
      className={`${styles.navBar} w-[304px]`}
    >
      <FlowbiteSidebar.Items className="w-[304px] pr-[20px]">
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item
            href={ROUTES.GET_STARTED}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${
              pathname.indexOf(ROUTES.GET_STARTED) !== -1 ? "bg-zinc-700" : ""
            }`}
          >
            <p>
              <span className="pr-2">🚀</span>
              Get Started
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.PROJECTS}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${
              pathname.indexOf(ROUTES.PROJECTS) !== -1 ? "bg-zinc-700" : ""
            }`}
          >
            <p>
              <span className="pr-2">📙</span>
              Projects
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.PERSUASION}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${
              pathname.indexOf(ROUTES.PERSUASION) !== -1 ? "bg-zinc-700" : ""
            }`}
          >
            <p>
              <span className="pr-2">🤹</span>
              Persuasion Blocks 101
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.ANALYTICS}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${
              pathname.indexOf(ROUTES.ANALYTICS) !== -1 ? "bg-zinc-700" : ""
            }`}
          >
            <p>
              <span className="pr-2">📈</span>
              Analytics
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.DOMAINS}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${
              pathname.indexOf(ROUTES.DOMAINS) !== -1 ? "bg-zinc-700" : ""
            }`}
          >
            <p>
              <span className="pr-2">🌐</span>
              Domains
            </p>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            href={ROUTES.HEAT_MAPS}
            as={Link}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 ${
              pathname.indexOf(ROUTES.HEAT_MAPS) !== -1 ? "bg-zinc-700" : ""
            }`}
          >
            <p>
              <span className="pr-2">️️🌡️</span>
              Heatmaps
            </p>
          </FlowbiteSidebar.Item>
          <div
            onClick={openProfilePopup}
            className={`text-white hover:bg-zinc-600 active:bg-zinc-700 p-3 pl-[25px] cursor-pointer hover:rounded-[8px]`}
          >
            <p>
              <span className="pr-2">⚙️</span>
              Settings
            </p>
          </div>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
      {showProfileModal && (
        <ProfilePopup closeHandler={() => setShowProfileModal(false)} />
      )}
      {/* <div className={`text-white bg-zinc-600 plan-benefits`}>
        <div className={`content`}>
          <h1>Upgrade your Plan </h1>
          <p>
            Upgrade to a higher plan to maximise your performance and enjoy
            better benefits
          </p>
          <button className="w-[138px] h-[33px] bg-[#DD00FF] text-white text-[15px] rounded hover:bg-hover cursor-pointer">
            Find a Plan
          </button>
        </div>
      </div> */}
    </FlowbiteSidebar>
  );
}
