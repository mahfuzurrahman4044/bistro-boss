import React from 'react';
import { useQuery } from '@tanstack/react-query'

const UseMenus = () => {
    const { isLoading, data: menus = [], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/menus")
            return res.json();
        },
    })
    return [isLoading, menus, refetch]
};

export default UseMenus;