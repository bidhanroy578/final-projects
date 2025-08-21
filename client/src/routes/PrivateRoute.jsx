import { Navigate, useLocation } from 'react-router';
import useAuthData from '../hooks/useAuthData';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuthData()
    console.log(location.pathname)
    if (loading) return <div>loading</div>
    if (!user) {
        return <Navigate to={'/authenticate/signin'} state={location.pathname} replace />
    }
    return children;
};

export default PrivateRoute;