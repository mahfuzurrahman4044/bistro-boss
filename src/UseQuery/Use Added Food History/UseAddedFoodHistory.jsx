import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Account/Provider/AuthProvider';
import UseAxiosSecure from '../../Account/Axios Secure/UseAxiosSecure';

const UseAddedFoodHistory = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();

    const { isLoading, data: addedFoodHistory = [], refetch } = useQuery({
        queryKey: ['addedFoodHistory', user?.email], queryFn: async () => {
            const data = await axiosSecure.get(`/menus/${user?.email}`)
            return data.data
        },
    })
    return [isLoading, addedFoodHistory, refetch]
};

export default UseAddedFoodHistory;