import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return <Spinner className='d-block mx-auto mt-5' animation="border" variant="dark" />
    }

    if (!user) {
        return <Navigate to='/signin' state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivateRoute;