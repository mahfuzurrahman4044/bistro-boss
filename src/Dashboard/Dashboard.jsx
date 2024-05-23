import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../Account/Provider/AuthProvider';
import UseAdmin from '../UseQuery/Use Admin/UseAdmin';
import UseSeller from '../UseQuery/Use Seller/UseSeller';
import img from "../assets/others/cupcake.gif";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [isAdminLoading, isAdmin] = UseAdmin();
    console.log(isAdmin);

    const [isSellerLoading, isSeller] = UseSeller();
    console.log(isSeller)

    // if (isAdminLoading || isSellerLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <Helmet><title>Dashboard || Bistro Boss  Restaurant</title></Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    {/* {location.pathname === '/dashboard' && (
                        <>
                            <div className='banner-img w-full'><img src={img} alt="" /></div>
                            <div className='text-center text-2xl font-semibold font-serif relative bottom-96'>
                                <h2>Welcome to Bistro Boss<br />Restaurant</h2>
                            </div>
                        </>
                    )} */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div>
                        <div className="font-serif text-center py-6 text-white bg-yellow-600">
                            <Link to="/">BISTRO BOSS <br />
                                <span>Restaurant</span>
                            </Link>
                        </div>
                    </div>
                    <ul className="menu p-4 w-80 min-h-full bg-yellow-600 text-base-content">
                        {
                            isAdmin && !isSeller ?

                                (<NavLink to="/dashboard/admin"><i className="fa-solid fa-user me-2"></i>Manage Users</NavLink>)
                                :
                                isSeller && !isAdmin ?
                                    (
                                        <>
                                            <NavLink to="/dashboard/addFood"><i class="fa-solid fa-bowl-food me-2"></i>Add Food</NavLink>
                                            <NavLink to="/dashboard/addedFoodHistory"><i className="fa-solid fa-shop me-2"></i>Added Food History</NavLink>
                                        </>
                                    ) :
                                    (
                                        <>
                                            <NavLink to="/dashboard/myCart"><i className="fa-solid fa-cart-shopping me-2"></i>My Cart</NavLink>
                                            <NavLink to="/dashboard/purchaseHistory"><i className="fa-solid fa-wallet me-2"></i>Purchase History</NavLink>
                                        </>
                                    )
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