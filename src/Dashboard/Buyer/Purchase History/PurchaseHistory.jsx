import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardSectionTitle from '../../../Shared/Dashboard Section Title/DashboardSectionTitle';
import UsePurchaseHistory from '../../../UseQuery/Use Purchase History/UsePurchaseHistory';

const PurchaseHistory = () => {
    const [isLoading, purchaseHistory] = UsePurchaseHistory();
    // console.log(purchaseHistory);

    const totalPrice = purchaseHistory.reduce((sum, item) => sum + parseFloat(item.price), 0);
    const totalItems = purchaseHistory.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <Helmet>
                <title>Purchase History || Dashboard || Bistro Boss Restaurant</title>
            </Helmet>

            <div>
                <DashboardSectionTitle title={"PAYMENT HISTORY"} subtitle={"---At a Glance!----"}></DashboardSectionTitle>
            </div>

            <div className='lg:ps-0 ps-36 font-serif font-semibold flex justify-around items-center my-6'>
                <h2 className='text-xl'>Total Items: {totalItems}</h2>
                <h2 className='text-xl'>Total Price: {"$" + totalPrice.toFixed(2)}</h2>
            </div>

            {/* --------------------------Table----------------- */}
            <div className='lg:ps-0 ps-48'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-yellow-600'>
                            <tr className='text-xl p-2 text-center'>
                                <th></th>
                                <th>Transaction ID</th>
                                <th>Number of Item</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchaseHistory.map((uniqueHistory, index) => (
                                    <tr key={uniqueHistory._id} className='text-center'>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <div className="font-bold">{uniqueHistory.transactionId}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{uniqueHistory.quantity}</td>
                                        <td>
                                            {"$" + uniqueHistory.price}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PurchaseHistory;
