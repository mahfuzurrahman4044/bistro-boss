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
            const res = await axiosSecure.get(`https://bistro-boss-server-mahfuzur-rahman.vercel.app/purchaseHistory/${user?.email}`)
            return res.data;
        },
    })
    return [isLoading, purchaseHistory, refetch]
};

export default UsePurchaseHistory;