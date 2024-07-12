import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    to: string;
    activeClassName?: string;
    className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({icon,text,to,activeClassName = 'border border-black-200 text-green rounded-md shadow-lg py-3 px-3',className = 'relative flex items-center py-3 px-3 my-1 font-medium text-lg rounded-md cursor-pointer gap-3'}) => {    
    return (
        <NavLink to={to} >
        {({ isActive }) => (
            <li className={isActive ? `${className} ${activeClassName}` : className}>
            {icon}
            <span>{text}</span>
            </li>
        )}
        </NavLink>
    );

}

export default SidebarItem;