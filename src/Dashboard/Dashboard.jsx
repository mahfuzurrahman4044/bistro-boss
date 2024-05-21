import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin = false;
    const isSeller = false;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-yellow-600 text-base-content">
                        {
                            isAdmin ?
                                <>
                                    <NavLink to="/dashboard/admin"><i className="fa-solid fa-user me-2"></i>Manage Users</NavLink>
                                </> :
                                isSeller ?
                                    <>
                                        <NavLink to="/dashboard/addFood"><i class="fa-solid fa-circle-plus me-2"></i>Add Food</NavLink>
                                        <NavLink to="/dashboard/addedFoodHistory"><i className="fa-solid fa-shop me-2"></i>Added Food History</NavLink>
                                    </> :
                                    <>
                                        <NavLink to="/dashboard/myCart"><i className="fa-solid fa-cart-shopping me-2"></i>My Cart</NavLink>
                                        <NavLink to="/dashboard/purchaseHistory"><i className="fa-solid fa-wallet me-2"></i>Purchase History</NavLink>
                                    </>
                        }



                        <div className='divider'></div>
                        <Link to="/"><i class="fa-solid fa-house me-2"></i>Home</Link>
                        <Link to="/menu"><i class="fa-solid fa-bars me-2"></i>Menu</Link>
                        <Link to="/order"><i class="fa-solid fa-bag-shopping me-2"></i>Order</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;