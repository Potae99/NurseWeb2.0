import React, { useState, useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { signOut, signIn, useSession } from "next-auth/react";

import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

function SideNavbar({ session }) {
  // const { data: session, status } = useSession();

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  // const [isMenuItems, setMenuItems] = useState([]);
  const router = useRouter();

  let MenuItems = [];

  const _menuItems = {
    "admin": [
      { id: 1, label: "จัดการผู้ใช้", icon: HomeIcon, link: "/user/admin/userManagement" },
      { id: 2, label: "จัดการรายวิชา", icon: ArticleIcon, link: "/user/admin/subjectManagement" },
      { id: 3, label: "ภาคการศึกษา", icon: UsersIcon, link: "/user/admin/semesterManagement" },
      { id: 4, label: "ผลการประเมิน", icon: VideosIcon, link: "/user/admin/semesterManagement" }
    ],
    "teacher": [
      { id: 1, label: "ผลการประเมินของฉัน", icon: HomeIcon, link: "/user/teacher/estimateMyself" },
      { id: 2, label: "ผลการประเมินรายวิชา", icon: ArticleIcon, link: "/user/teacher/estimateMySubject" },
    ],
    "student": [
      { id: 1, label: "การประเมิน", icon: HomeIcon, link: "/user/student/estimate" },
    ]
  };

  // if(!session){
  //   router.push("/api/auth/signin");
  //   // return <div>Loading </div>;
  // }

  if (session && session.role != undefined) {
    MenuItems = _menuItems[session.role]; // session.level
  }


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
    if (!activeMenu) {
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

    <Disclosure as="nav" className="z-50 inline-flex items-center justify-center p-2 drop-shadow-md fixed ">
      <Disclosure.Button className=" mr-[200px] inline-flex items-center peer rounded-md absolute top-0 right-0 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        <GiHamburgerMenu
          className="block md:hidden h-6 w-6 "
          aria-hidden="true"
        />
      </Disclosure.Button>

      <div className=" p-6 w-1/2 h-screen bg-stone-700 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start item-center">
          <h1 className="text-base text-center cursor-pointer font-bold text-white border-b border-gray-100 pb-4 w-full">
            เมนู
          </h1>

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
              <div key={"sideNavBar_" + menu.id} className={classes}>
                <Link href={menu.link} className="text-white flex py-4 px-3 items-center w-full h-full">
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



          {/* <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Dashboard
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Profile
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Comments
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Analytics
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Messages
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Integration
                </h3>
              </div>
            </div> */}


          {/* setting  */}
          {/* <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div> */}
          {/* logout */}
          {/* <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div> */}
        </div>
      </div>
    </Disclosure>

  );
}

export default SideNavbar;