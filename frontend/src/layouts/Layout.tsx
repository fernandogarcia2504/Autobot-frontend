import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import SidebarItem from './Sidebar/Props/SidebarItem';

import { AiFillDashboard } from "react-icons/ai";
import { FaMessage, FaUser } from "react-icons/fa6";
import { BiSolidConversation } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isAuthPage = location.pathname.includes('/auth');

    if(isAuthPage) {
        return (
            <div className='h-full'> {/* Use h-full instead of h-screen */}
                <div className='flex h-full'>
                    <Sidebar>
                        <SidebarItem icon={<AiFillDashboard />} text="Dashboard" to="/auth/dashboard" />
                        <SidebarItem icon={<BiSolidConversation />} text="Conversaciones" to="/auth/conversations" />
                        <SidebarItem icon={<FaUserCircle />} text="Usuarios" to="/auth/users" />
                    </Sidebar>
                    <div className='w-full flex flex-col'> {/* Ensure full width and flex column */}
                        <Navbar />
                        <main className="flex-grow h-full">{children}</main> {/* Main should grow to fill space */}
                    </div>
                </div>
            </div>
        );
    }

    return(
        <main>{children}</main>
    )
};

export default Layout;
