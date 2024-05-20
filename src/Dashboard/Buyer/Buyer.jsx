import React from 'react';
import UseCarts from '../../UseQuery/Use Carts/UseCarts';

const Buyer = () => {
    const [isLoading, carts, refetch] = UseCarts();
    console.log(carts);

    return (
        <div>
            This is Buyer page
        </div>
    );
};

export default Buyer;