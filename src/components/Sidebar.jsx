import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

import { signOut, signIn, useSession } from "next-auth/react";





const Sidebar = () => {
  const { data: session, status } = useSession();

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  // const [isMenuItems, setMenuItems] = useState([]);
  const router = useRouter();

  let MenuItems = [];


  const _menuItems=   {"admin":[
    { id: 1, label: "จัดการผู้ใช้", icon: HomeIcon, link: "/admin/home" },
    { id: 2, label: "จัดการรายวิชา", icon: ArticleIcon, link: "/user/admin/subjectManagement" },
    { id: 3, label: "ภาคการศึกษา", icon: UsersIcon, link: "/user/admin/semesterManagement" },
    { id: 4, label: "ผลการประเมิน", icon: VideosIcon, link: "/user/admin/semesterManagement" }
  ],
  "teacher":[
    { id: 1, label: "ผลการประเมินของฉัน", icon: HomeIcon, link: "/user/teacher/estimateMyself" },
    { id: 2, label: "ผลการประเมินรายวิชา", icon: ArticleIcon, link: "/user/teacher/estimateMySubject" },
  ],
  "student":[
    { id: 1, label: "การประเมิน", icon: HomeIcon, link: "/user/student/estimate" },
  ]
};

  if(session){
    MenuItems = _menuItems[session.level]; // session.level
  }

  if(status === "unauthenticated"){
    router.push("/api/auth/signin");
  }

  


  //get level view from session

  let activeMenu = useMemo(
    () => MenuItems.find((menu) => menu.link === router.pathname), //menuItems["admin"].find((menu) => menu.link === router.pathname),
    [router.pathname]
    // if did not find menu.link === router.pathname
    // if activeMenu is empty


  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-stone-700 flex justify-between flex-col text-white z-10 md:z-0 absolute md:fixed",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    if(!activeMenu){
      activeMenu = {};
    }
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  return (
    <div className="relative w-11">

   
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Nurse NU
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {MenuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full">
                  {/* <a className="flex py-4 px-3 items-center w-full h-full"> */}
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}

                  {/* </a> */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className={`${getNavItemClasses({})} px-3 py-4`} onClick={handleSignOut}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            ออกจากระบบ
          </span>
        )}
      </div> */}

    </div>
    </div>

  );
};

export default Sidebar;