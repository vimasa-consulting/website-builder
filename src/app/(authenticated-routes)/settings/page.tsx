"use client";
import React, { useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import styles from "../../../styles/settings.module.scss";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Account");

  const customTabStyle = {
    backgroundColor: "blue",
    color: "white",
    borderRadius: "10px",
  };

  const handleTabClick = (tabTitle:string) => {
    setActiveTab(tabTitle);
    console.log("tabTitle", tabTitle);
  };
  console.log("activeTab", activeTab);

  return (
    <>
      <div className={styles.tabsContainer}>
        <div className={styles.tabButtons}>
          <button
            onClick={() => handleTabClick("Account")}
            className={`${styles.tabButton} ${
              activeTab === "Account" ? styles.active : ""
            }`}
            // style={customTabStyle}
          >
            <HiUserCircle />
            Account
          </button>
          <button
            onClick={() => handleTabClick("Profile")}
            className={`${styles.tabButton} ${
              activeTab === "Profile" ? styles.active : ""
            }`}
          >
            <MdDashboard />
            Profile
          </button>
          <button
            onClick={() => handleTabClick("Security")}
            className={`${styles.tabButton} ${
              activeTab === "Security" ? styles.active : ""
            }`}
          >
            <HiAdjustments />
            Security
          </button>
          <button
            onClick={() => handleTabClick("Team")}
            className={`${styles.tabButton} ${
              activeTab === "Team" ? styles.active : ""
            }`}
          >
            <HiClipboardList />
            Team
          </button>
          <button
            onClick={() => handleTabClick("Plan & Billings")}
            className={`${styles.tabButton} ${
              activeTab === "Plan & Billings" ? styles.active : ""
            }`}
          >
            <HiClipboardList />
            Plan & Billings
          </button>
        </div>
        <div className={styles.tabContent}>
          {activeTab === "Account" && (
            <>
              {/* <h3 className={styles.header}>Team</h3>
              <h3 className={styles.subHeader}>Invite Teammates</h3>
              <p className={styles.subPara}>
                Clicking another tab will toggle the visibility of this one for
                the next. The JavaScript swaps classes to control the content
                visibility and styling.
              </p> */}
              <span className="font-medium text-gray-800 dark:text-white">
                Clicking another tab will toggle the visibility of this one for
                the next.
              </span>
            </>
          )}
          {activeTab === "Profile" && (
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tabs associated content
            </span>
          )}
          {activeTab === "Security" && (
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tabs associated content
            </span>
          )}
          {activeTab === "Team" && (
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tabs associated content
            </span>
          )}
          {activeTab === "Plan & Billings" && (
            <span className="font-medium text-gray-800 dark:text-white">
              Plan tabs associated content
            </span>
          )}
        </div>
      </div>
    </>
  );
}
