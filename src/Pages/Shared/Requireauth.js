import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const Requireauth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
   return children
};

export default Requireauth;