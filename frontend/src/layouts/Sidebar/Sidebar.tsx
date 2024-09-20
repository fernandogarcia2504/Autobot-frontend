import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSettings, IoLogOutSharp } from "react-icons/io5";
import { ROUTES } from "../../ROUTES";
import { AuthContext } from "../../context/auth";
import SettingsCard from "../../components/cards/AuthCards/SettingsCard/SettingsCard";

type SidebarProps = React.PropsWithChildren<{}>;

export default function Sidebar({ children }: SidebarProps) {
  const authContext = useContext(AuthContext); // Access AuthContext
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State to manage popup visibility

  const handleLogout = () => {
    console.log("Logout button clicked"); // Debugging log
    authContext?.logout();
  };

  const toggleSettingsPopup = () => {
    setIsSettingsOpen((prev) => !prev); // Toggle popup
  };

  return (
    <>
      <aside className="h-screen">
        <nav className="h-full w-64 flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pt-12 flex justify-center items-center">
            <h1 className="text-4xl text-green font-bold">AutoBot</h1>
          </div>

          <ul className="flex-1 px-3 mt-20">{children}</ul>

          <ul className="border-t flex flex-col p-3">
            <li
              className="relative flex items-center py-2 px-3 my-1 font-medium rounded-lg cursor-pointer gap-2 text-xl"
              onClick={toggleSettingsPopup} // Trigger popup
            >
              <IoSettings />
              <span>Ajustes</span>
            </li>
            <li className="relative flex items-center py-2 px-3 my-1 font-medium rounded-lg cursor-pointer gap-2 text-xl">
              <IoLogOutSharp />
              <button className="m-0 text-left" onClick={handleLogout}>
                Cerrar Sesion
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Render SettingsCard */}
      <SettingsCard show={isSettingsOpen} onClose={toggleSettingsPopup} />
    </>
  );
}


