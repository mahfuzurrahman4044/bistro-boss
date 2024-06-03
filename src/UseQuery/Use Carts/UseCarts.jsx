import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Account/Provider/AuthProvider';
import UseAxiosSecure from '../../Account/Axios Secure/UseAxiosSecure';

const UseCarts = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem("access-token")
    const [axiosSecure] = UseAxiosSecure()

    const { isLoading, data: carts = [], refetch } = useQuery({
        queryKey: ['carts'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts/${user?.email}`
            )
            return res.data;
        },
        // queryFn: async () => {
        //     const res = await fetch(`https://bistro-boss-server-mahfuzur-rahman.vercel.app/carts/${user?.email}`,
        //         {
        //             headers: {
        //                 authorization: `bearer ${token}`
        //             }
        //         }
        //     )
        //     return res.json()
        // },
    })
    return [isLoading, carts, refetch]
};

export default UseCarts;