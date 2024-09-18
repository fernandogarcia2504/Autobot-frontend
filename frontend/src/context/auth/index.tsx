import React, { createContext, useState, useEffect } from 'react';
import { IAuthContext } from './types';

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    useEffect(() => {
        if (token) {
            const tokenExpiration = JSON.parse(atob(token.split('.')[1])).exp * 1000;
            if (Date.now() >= tokenExpiration) {
                logout();
            }
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
