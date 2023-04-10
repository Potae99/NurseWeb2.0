import React, { useState, useMemo } from "react";
import classNames from "classnames";
// import Link from "next/link";
// import { useRouter } from "next/router";

import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
// import {
//   MdOutlineSpaceDashboard,
//   MdOutlineAnalytics,
//   MdOutlineIntegrationInstructions,
//   MdOutlineMoreHoriz,
//   MdOutlineSettings,
//   MdOutlineLogout,
// } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { FaRegComments } from "react-icons/fa";
// import { BiMessageSquareDots } from "react-icons/bi";
// import { signOut, signIn, useSession } from "next-auth/react";

import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
  Academiccap,
  Calender,
  SearchIcon,
} from "./icons";

function SideNavbar({ session }) {
  // const { data: session, status } = useSession();

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  // const [isMenuItems, setMenuItems] = useState([]);
  // const router = useRouter();

  let MenuItems = [];

  const _menuItems = {
    "admin": [
      { id: 1, label: "จัดการผู้ใช้", icon: HomeIcon, link: "/admin/home" },
      { id: 2, label: "จัดการหลักสูตร", icon: Academiccap, link: "/admin/course/syllabus/adminsyllabus" },
      { id: 3, label: "จัดการรายวิชา", icon: ArticleIcon, link: "/admin/course/all" },
      { id: 4, label: "จัดการคาบเรียน", icon: Calender, link: "/admin/class" },
      { id: 5, label: "ผลการประเมิน", icon: SearchIcon, link: "/admin/eval/search" },
      { id: 6, label: "ทุนการศึกษา", icon: VideosIcon, link: "/admin/scholarship/add" },
      { id: 7, label: "ภาพรวม", icon: CollapsIcon, link: "/admin/overall" }
    ],
    "teacher": [
      { id: 1, label: "หน้าหลัก", icon: HomeIcon, link: "/teacher/home" },
      { id: 2, label: "จัดการรายวิชาของฉัน", icon: ArticleIcon, link: "/teacher/subject" },
      { id: 3, label: "ผลการประเมินของฉัน", icon: SearchIcon, link: "/teacher/Taughview" },
      { id: 4, label: "ผลการประเมินรายวิชา", icon: Academiccap, link: "/teacher/eval/search" },
    ],
    "student": [
      { id: 1, label: "หน้าหลัก", icon: HomeIcon, link: "/student/home" },
      { id: 2, label: "การประเมิน", icon: ArticleIcon, link: "/student/eval/all" },
    ]
  };

  MenuItems = _menuItems[session.level];

  let activeMenu = useMemo(
    () => MenuItems.find((menu) => menu.link === window.location.pathname), //menuItems["admin"].find((menu) => menu.link === router.pathname),
    [window.location.pathname]
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
    // signOut();
    // router.push("/");
  };







  return (

    <Disclosure as="nav" className=" z-50 inline-flex items-center justify-center p-2 drop-shadow-md fixed ">
      <Disclosure.Button className=" mr-[200px] inline-flex items-center peer rounded-md absolute top-0 right-0 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        <GiHamburgerMenu
          className="block md:hidden h-6 w-6 "
          aria-hidden="true"
        />
      </Disclosure.Button>

      <div className="overflow-auto p-6 w-1/2 h-screen bg-stone-700 z-20 fixed top-0 -left-96 md:left-0 md:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
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
              <div key={"sideNavBar_" + menu.id} className={ (menu.link === window.location.pathname ? "bg-stone-600 " : " ") + "  flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap transition duration-300 "}>
              <a href={menu.link} className={(menu.link === window.location.pathname ? "text-white" : "text-stone-300 ") + "  hover:text-white flex py-4 px-3 items-center w-full h-full"}>
                {/* <a className="flex py-4 px-3 items-center w-full h-full"> */}
                <div style={{ width: "2.5rem" }}>
                  <Icon />
                </div>
                {!toggleCollapse && (
                  <p
                    // className={classNames(
                    //   "text-md font-medium text-stone-300 hover:text-white"
                    // )}
                  >
                    {menu.label}
                  </p>
                )}

                {/* </a> */}
              </a>
            </div>

            );
          })}
          <div className=" text-stone-300 text-xs  ml-20 items-center  bottom-1">
            <a className="  hover:text-yellow-300 " href="/credit">
              ผู้จัดทำ
            </a>
         
          </div>



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
