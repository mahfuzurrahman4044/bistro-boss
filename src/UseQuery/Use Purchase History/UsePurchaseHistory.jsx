import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../Account/Provider/AuthProvider';
import UseAxiosSecure from '../../Account/Axios Secure/UseAxiosSecure';


const UsePurchaseHistory = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();

    const { isLoading, data: purchaseHistory = [], refetch } = useQuery({
        queryKey: ['purchaseHistory', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`http://localhost:5000/purchaseHistory/${user?.email}`)
            return res.data;
        },
    })
    return [isLoading, purchaseHistory, refetch]
};

export default UsePurchaseHistory;