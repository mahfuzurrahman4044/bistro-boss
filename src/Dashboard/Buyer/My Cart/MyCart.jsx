import React from 'react';
import UseCarts from '../../../UseQuery/Use Carts/UseCarts';

const MyCart = () => {
    const [isLoading, carts, refetch] = UseCarts()
    const total = carts.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <h2>{carts.length}</h2>
            <h2>{total}</h2>
        </div>
    );
};

export default MyCart;