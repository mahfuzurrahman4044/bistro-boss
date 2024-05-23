import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../Account/Provider/AuthProvider';
import UseAxiosSecure from '../../Account/Axios Secure/UseAxiosSecure';

const UseAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user);
    const [axiosSecure] = UseAxiosSecure()

    const { isAdminLoading, data: isAdmin, refetch } = useQuery({
        queryKey: ['admin', user?.email],
        enabled: user?.email !== undefined && !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/isAdmin/${user?.email}`)
            // return res.json()
            return res.data.admin
        },
    })
    // console.log(isAdmin)

    return [isAdminLoading, isAdmin, refetch];

};

export default UseAdmin;
