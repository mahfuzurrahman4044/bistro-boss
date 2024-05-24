import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import UseSeller from '../../UseQuery/Use Seller/UseSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSellerLoading, isSeller] = UseSeller()
    const location = useLocation()

    if (loading || isSellerLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isSeller) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default SellerRoute;