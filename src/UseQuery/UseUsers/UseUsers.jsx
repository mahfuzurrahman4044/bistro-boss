import React from 'react';
import { useQuery } from '@tanstack/react-query'


const UseUsers = () => {
    const { isLoading, data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users")
            return res.json()
        },
    })
    return [isLoading, users, refetch]
};

export default UseUsers;