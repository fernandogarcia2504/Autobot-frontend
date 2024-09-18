import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const authContext = useContext(AuthContext);

    // Ensure the token check is correct
    if (!authContext || !authContext.token) {
        return <Navigate to="/login" replace />; // Redirect to login if no token
    }

    return <>{children}</>; // Render protected content
};

export default ProtectedRoute;
