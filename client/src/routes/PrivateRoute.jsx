import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context_api/Auth_context';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext)
    console.log(location.pathname)
    if (!user) {
        return <Navigate to={'/signin'} state={location.pathname} replace />
    }
    return children;
};

export default PrivateRoute;