import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import AuthProvider from '../../Account/Provider/AuthProvider';
import UseAxiosSecure from '../../Account/Axios Secure/UseAxiosSecure';

const UseUsers = () => {
    // const { loading } = useContext(AuthProvider);
const [axiosSecure]=UseAxiosSecure()

    const { isLoading, data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            // return res.json()
            return res.data
        },
    })
    return [isLoading, users, refetch]
};

export default UseUsers;