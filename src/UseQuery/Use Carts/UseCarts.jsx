import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../Account/Provider/AuthProvider';

const UseCarts = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, data: carts = [], refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts/${user?.email}`)
            return res.json()
        },
    })
    return [isLoading, carts, refetch]
};

export default UseCarts;