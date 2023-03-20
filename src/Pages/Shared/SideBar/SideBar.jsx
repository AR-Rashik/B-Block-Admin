import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaArrowUp,
  FaChartLine,
  FaClipboardList,
  FaMinus,
  FaPlus,
  FaRegListAlt,
  FaUserCog,
  FaUserEdit,
  FaUserFriends,
  FaUserPlus,
  FaUserShield,
  FaUsersSlash,
  FaWrench,
} from "react-icons/fa";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const [clientShow, setClientShow] = useState(false);
  const [roleShow, setRoleShow] = useState(false);
  const [settingsShow, setSettingsShow] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleResponsiveButton = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="w-64 h-screen md:sticky top-20 left-0 sm:relative bg-slate-100 shadow md:h-full flex-col justify-between hidden sm:flex">
        <div className="px-8">
          <ul className="mt-12">
            {/* Dashboard */}
            <Link
              to="/"
              className="flex w-full justify-between text-gray-600 hover:text-emerald-500 font-semibold transition-colors duration-300 transform cursor-pointer items-center mb-6"
            >
              <div className="flex items-center">
                <FaChartLine className="text-emerald-500"></FaChartLine>
                <span className="text-sm  ml-2">Dashboard</span>
              </div>
              {/* <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                5
              </div> */}
            </Link>

            {/* Client */}
            <li className="text-emerald-500 transition-colors duration-300 transform font-semibold text-sm cursor-pointer mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center text-sm">
                  <div className="">
                    <FaUserFriends className=""></FaUserFriends>
                  </div>
                  <p className="text-gray-600 hover:text-emerald-500 ml-3">
                    Client
                  </p>
                </div>
                <div onClick={() => setClientShow(!clientShow)}>
                  {clientShow ? (
                    <div className="">
                      <FaArrowUp></FaArrowUp>
                    </div>
                  ) : (
                    <div className="">
                      <FaArrowDown></FaArrowDown>
                    </div>
                  )}
                </div>
              </div>
              {clientShow ? (
                <div className="">
                  <ul className="my-3">
                    <Link
                      to={"/client/addclient"}
                      className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                    >
                      <span>
                        <FaUserPlus className="mr-4"></FaUserPlus>
                      </span>
                      <span className="text-gray-600 hover:text-emerald-500">
                        Add Client
                      </span>
                    </Link>
                    <Link
                      to={"/client/allclients"}
                      className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                    >
                      <span>
                        <FaRegListAlt className="mr-4"></FaRegListAlt>
                      </span>
                      <span className="text-gray-600 hover:text-emerald-500">
                        All Clients
                      </span>
                    </Link>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>

            {/* Role */}
            <li className="text-emerald-500 transition-colors duration-300 transform font-semibold text-sm cursor-pointer mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center text-sm">
                  <div className="">
                    <FaUserShield className=""></FaUserShield>
                  </div>
                  <p className="text-gray-600 hover:text-emerald-500 ml-3">
                    Role
                  </p>
                </div>
                <div onClick={() => setRoleShow(!roleShow)}>
                  {roleShow ? (
                    <div className="">
                      <FaArrowUp></FaArrowUp>
                    </div>
                  ) : (
                    <div className="">
                      <FaArrowDown></FaArrowDown>
                    </div>
                  )}
                </div>
              </div>
              {roleShow ? (
                <div className="">
                  <ul className="my-3">
                    <Link
                      to={"/role/addrole"}
                      className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                    >
                      <span>
                        <FaUserEdit className="mr-4"></FaUserEdit>
                      </span>
                      <span className="text-gray-600 hover:text-emerald-500">
                        Add Role
                      </span>
                    </Link>
                    <Link
                      to={"/role/allroles"}
                      className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                    >
                      <span>
                        <FaClipboardList className="mr-4"></FaClipboardList>
                      </span>
                      <span className="text-gray-600 hover:text-emerald-500">
                        All Roles
                      </span>
                    </Link>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>

            {/* Settings */}
            <li className="text-emerald-500 transition-colors duration-300 transform font-semibold text-sm cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center text-sm">
                  <div className="">
                    <FaWrench className=""></FaWrench>
                  </div>
                  <p className="text-gray-600 hover:text-emerald-500 ml-3">
                    Settings
                  </p>
                </div>
                <div onClick={() => setSettingsShow(!settingsShow)}>
                  {settingsShow ? (
                    <div className="">
                      <FaArrowUp></FaArrowUp>
                    </div>
                  ) : (
                    <div className="">
                      <FaArrowDown></FaArrowDown>
                    </div>
                  )}
                </div>
              </div>
              {settingsShow ? (
                <div className="">
                  <ul className="my-3">
                    <Link
                      to={"/settings/changepassword"}
                      className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                    >
                      <span>
                        <FaUserCog className="mr-4"></FaUserCog>
                      </span>
                      <span className="text-gray-600 hover:text-emerald-500">
                        Change Password
                      </span>
                    </Link>
                    <Link
                      to={"/settings/blocklist"}
                      className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                    >
                      <span>
                        <FaUsersSlash className="mr-4"></FaUsersSlash>
                      </span>
                      <span className="text-gray-600 hover:text-emerald-500">
                        Block List
                      </span>
                    </Link>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          </ul>
          {/* Profile  */}
          <div className="flex items-center mt-48 mb-10 px-8">
            <div className="w-10 h-10 bg-cover rounded-md mr-3">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_2.png"
                alt="profile-avatar"
                className="rounded-full h-full w-full overflow-hidden shadow"
              />
            </div>
            <div>
              <p className="text-gray-800 text-sm font-medium">John Doe</p>
              <Link
                to={"/my-profile"}
                className="text-gray-600 hover:text-emerald-500 text-xs cursor-pointer"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="px-8  bg-gray-200">
          <ul className="w-full flex items-center justify-between">
            <li className="cursor-pointer text-emerald-500 pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </li>
            <li className="cursor-pointer text-emerald-500 pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
              </svg>
            </li>
            <li className="cursor-pointer text-emerald-500 pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
            </li>
            <li className="cursor-pointer text-emerald-500 pt-5 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-archive"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x={3} y={4} width={18} height={4} rx={2} />
                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                <line x1={10} y1={12} x2={14} y2={12} />
              </svg>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile responsive */}
      <div
        className="w-64 z-40 absolute bg-slate-100 shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out"
        id="mobile-nav"
      >
        <div
          className={
            isActive
              ? "h-10 w-10 bg-emerald-600 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
              : "h-10 w-10 bg-emerald-600 absolute right-64 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          }
          id="mobile-toggler"
          onClick={() => {
            setShow(!show);
            handleResponsiveButton();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-adjustments"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FFFFFF"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={6} cy={10} r={2} />
            <line x1={6} y1={4} x2={6} y2={8} />
            <line x1={6} y1={12} x2={6} y2={20} />
            <circle cx={12} cy={16} r={2} />
            <line x1={12} y1={4} x2={12} y2={14} />
            <line x1={12} y1={18} x2={12} y2={20} />
            <circle cx={18} cy={7} r={2} />
            <line x1={18} y1={4} x2={18} y2={5} />
            <line x1={18} y1={9} x2={18} y2={20} />
          </svg>
        </div>
        {show && (
          <div className="px-8">
            <ul className="mt-12">
              {/* Dashboard */}
              <Link
                to="/"
                className="flex w-full justify-between text-gray-600 hover:text-emerald-500 font-semibold transition-colors duration-300 transform cursor-pointer items-center mb-6"
              >
                <div className="flex items-center">
                  <FaChartLine className="text-emerald-500"></FaChartLine>
                  <span className="text-sm  ml-2">Dashboard</span>
                </div>
                {/* <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                5
              </div> */}
              </Link>

              {/* Client */}
              <li className="text-emerald-500 transition-colors duration-300 transform font-semibold text-sm cursor-pointer mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center text-sm">
                    <div className="">
                      <FaUserFriends className=""></FaUserFriends>
                    </div>
                    <p className="text-gray-600 hover:text-emerald-500 ml-3">
                      Client
                    </p>
                  </div>
                  <div onClick={() => setClientShow(!clientShow)}>
                    {clientShow ? (
                      <div className="">
                        <FaArrowUp></FaArrowUp>
                      </div>
                    ) : (
                      <div className="">
                        <FaArrowDown></FaArrowDown>
                      </div>
                    )}
                  </div>
                </div>
                {clientShow ? (
                  <div className="">
                    <ul className="my-3">
                      <Link
                        to={"/client/addclient"}
                        className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                      >
                        <span>
                          <FaUserPlus className="mr-4"></FaUserPlus>
                        </span>
                        <span className="text-gray-600 hover:text-emerald-500">
                          Add Client
                        </span>
                      </Link>
                      <Link
                        to={"/client/allclients"}
                        className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                      >
                        <span>
                          <FaRegListAlt className="mr-4"></FaRegListAlt>
                        </span>
                        <span className="text-gray-600 hover:text-emerald-500">
                          All Clients
                        </span>
                      </Link>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>

              {/* Role */}
              <li className="text-emerald-500 transition-colors duration-300 transform font-semibold text-sm cursor-pointer mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center text-sm">
                    <div className="">
                      <FaUserShield className=""></FaUserShield>
                    </div>
                    <p className="text-gray-600 hover:text-emerald-500 ml-3">
                      Role
                    </p>
                  </div>
                  <div onClick={() => setRoleShow(!roleShow)}>
                    {roleShow ? (
                      <div className="">
                        <FaArrowUp></FaArrowUp>
                      </div>
                    ) : (
                      <div className="">
                        <FaArrowDown></FaArrowDown>
                      </div>
                    )}
                  </div>
                </div>
                {roleShow ? (
                  <div className="">
                    <ul className="my-3">
                      <Link
                        to={"/role/addrole"}
                        className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                      >
                        <span>
                          <FaUserEdit className="mr-4"></FaUserEdit>
                        </span>
                        <span className="text-gray-600 hover:text-emerald-500">
                          Add Role
                        </span>
                      </Link>
                      <Link
                        to={"/role/allroles"}
                        className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                      >
                        <span>
                          <FaClipboardList className="mr-4"></FaClipboardList>
                        </span>
                        <span className="text-gray-600 hover:text-emerald-500">
                          All Roles
                        </span>
                      </Link>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>

              {/* Settings */}
              <li className="text-emerald-500 transition-colors duration-300 transform font-semibold text-sm cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center text-sm">
                    <div className="">
                      <FaWrench className=""></FaWrench>
                    </div>
                    <p className="text-gray-600 hover:text-emerald-500 ml-3">
                      Settings
                    </p>
                  </div>
                  <div onClick={() => setSettingsShow(!settingsShow)}>
                    {settingsShow ? (
                      <div className="">
                        <FaArrowUp></FaArrowUp>
                      </div>
                    ) : (
                      <div className="">
                        <FaArrowDown></FaArrowDown>
                      </div>
                    )}
                  </div>
                </div>
                {settingsShow ? (
                  <div className="">
                    <ul className="my-3">
                      <Link
                        to={"/settings/changepassword"}
                        className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                      >
                        <span>
                          <FaUserCog className="mr-4"></FaUserCog>
                        </span>
                        <span className="text-gray-600 hover:text-emerald-500">
                          Change Password
                        </span>
                      </Link>
                      <Link
                        to={"/settings/blocklist"}
                        className="text-sm text-emerald-500 py-2 px-6 flex items-center"
                      >
                        <span>
                          <FaUsersSlash className="mr-4"></FaUsersSlash>
                        </span>
                        <span className="text-gray-600 hover:text-emerald-500">
                          Block List
                        </span>
                      </Link>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>
            <div className="flex justify-center mt-48 mb-4 w-full">
              <div className="relative ">
                <div className="text-emerald-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  className="focus:outline-emerald-500 rounded w-full text-sm text-gray-600 bg-gray-200 pl-10 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        )}
        {show && (
          <div className="px-8 border-t bg-gray-200">
            <ul className="w-full flex items-center justify-between">
              <li className="cursor-pointer text-emerald-500 pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bell"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </li>
              <li className="cursor-pointer text-emerald-500 pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-messages"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>
              </li>
              <li className="cursor-pointer text-emerald-500 pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </li>
              <li className="cursor-pointer text-emerald-500 pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-archive"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={4} rx={2} />
                  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                  <line x1={10} y1={12} x2={14} y2={12} />
                </svg>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* Sidebar ends */}
    </>
  );
};

export default SideBar;
