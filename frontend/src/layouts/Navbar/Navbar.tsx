import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState<string | null>(null);

    useEffect(() => {
        switch(location.pathname) {
            case '/auth/dashboard':
                setTitle('Dashboard')
                setSubtitle(null);
                break;
            case '/auth/messages':
                setTitle('Nuevos mensajes')
                setSubtitle(null);
                break;
            case '/auth/conversations':
                setTitle('Conversaciones')
                setSubtitle(null);
                break;
            case '/auth/users':
                setTitle('Usuarios')
                setSubtitle(null);
                break;
        }
    })
    return(
        <header className="w-full h-[13%] bg-green flex items-center pl-14 text-4xl font-bold text-white  ">

            <h1>{title}</h1>

        </header>
    )
}

export default Navbar;