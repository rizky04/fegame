import React from "react";
import Profile from "./Profile";
import FooterSideBar from "./FooterSideBar";
import Image from "next/image";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu: 'overview' | 'transaction' | 'settings'
}
export default function SideBar(props: SideBarProps) {
  const {activeMenu} = props;
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <div className="menus">
            <Profile />
            <MenuItem icon="overview" title="Overview" active={activeMenu === "overview"} href="/member"/>
            <MenuItem icon="transactions" title="Transactions" active={activeMenu === "transaction"} href="/member/transactions"/>
            <MenuItem icon="messages" title="Messages" href="/member"/>
            <MenuItem icon="card" title="Card" href="/member"/>
            <MenuItem icon="reward" title="Reward" href="/member"/>
            <MenuItem icon="settings" title="Setting" active={activeMenu === "settings"} href="/member/edit-profile"/>
            <MenuItem icon="logout" title="Log Out" href="/sign-in"/>
            <FooterSideBar />
          </div>
        </div>
      </section>
    </>
  );
}
