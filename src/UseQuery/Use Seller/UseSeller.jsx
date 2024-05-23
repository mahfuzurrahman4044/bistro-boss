import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../Account/Provider/AuthProvider';
import UseAxiosSecure from '../../Account/Axios Secure/UseAxiosSecure';
import { data } from 'autoprefixer';

const UseSeller = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure()

    const { isSellerLoading, data: isSeller, refetch } = useQuery({
        queryKey: ['seller', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/isSeller/${user?.email}`)
            // return res.json()
            return res.data.seller;
        },
    })

    return [isSellerLoading, isSeller, refetch];
};

export default UseSeller;
