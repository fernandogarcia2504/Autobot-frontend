import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const navigate = useNavigate();

    // Logout function
    const logout = () => {
        localStorage.removeItem('token'); // Remove token
        setToken(null); // Clear token state
        navigate('/'); // Redirect to login page
    };

    // Check token expiration and logout if expired
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
