import React from 'react';
import { useQuery } from '@tanstack/react-query'

const UseMenus = () => {
    const { isLoading, data: menus = [], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await fetch("https://bistro-boss-server-rho-ten.vercel.app/menus")
            return res.json();
        },
    })
    return [isLoading, menus, refetch]
};

export default UseMenus;