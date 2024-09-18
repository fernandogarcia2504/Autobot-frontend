import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" />; // Redirect to login if no token
    }

    return <>{children}</>; // Render protected content
};

export default ProtectedRoute;
