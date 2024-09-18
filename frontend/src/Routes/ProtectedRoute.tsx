import { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const authContext = useContext(AuthContext);
    if (!authContext?.token) {
        console.log(authContext?.token) 
        return <Navigate to="/" />;
    }

    return <>{children}</>; 
};

export default ProtectedRoute;
