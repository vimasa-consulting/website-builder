"use client";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import styles from "../../../styles/settings.module.scss";

const { Group, Item } = Tabs;

export default function Page() {
  return (
    <>
      <Group aria-label="Full width tabs" style="fullWidth">
        <Item
          active
          title="Account"
          className={styles.buttonSection}
          icon={HiUserCircle}
        >
          <h3 className={styles.header}>Team</h3>
          <h3 className={styles.subHeader}>Invite Teamates</h3>
          <p className={styles.subPara}>
            {" "}
            Clicking another tab will toggle the visibility of this one for the
            next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </Item>
        <Item title="Profile" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Item>
        <Item title="Security" icon={HiAdjustments}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Item>
        <Item title="Team" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Item>
        <Item title="Plan & Billings" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Item>
      </Group>
    </>
  );
}
