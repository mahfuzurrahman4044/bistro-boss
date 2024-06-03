import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import DashboardSectionTitle from '../../../Shared/Dashboard Section Title/DashboardSectionTitle';
import { AuthContext } from '../../../Account/Provider/AuthProvider';
import UseAxiosSecure from '../../../Account/Axios Secure/UseAxiosSecure';
import Swal from 'sweetalert2';
import UseMenus from '../../../UseQuery/Use Menus/UseMenus';

const AllFoods = () => {
    const [isLoading, menus, refetch] = UseMenus();
    // console.log(addedFoodHistory)

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = UseAxiosSecure();

    const handleDelete = (id) => {
        // console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menuDelete/${id}`)
                    .then(data => {
                        console.log(data.data)
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Item has been deleted",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })
            }
        })
    }


    return (
        <div>
            <Helmet><title>All Foods || Dashboard || Bistro Boss</title></Helmet>
            <div>
                <DashboardSectionTitle title={"MANAGE ALL ITEMS"} subtitle={"---Hurry Up!---"}></DashboardSectionTitle>
            </div>

            <div className='font-serif font-semibold flex justify-around items-center my-6'>
                <h2 className='text-xl'>Total Items: {menus.length}</h2>
            </div>

            {/* --------------------------Table----------------------- */}
            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-yellow-600'>
                            <tr className='text-xl p-2 text-center'>
                                <th></th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus.map((menu, index) =>
                                    <tr key={menu._id} className='text-center'>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{menu.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {"$" + menu.price}
                                        </td>
                                        <td className='btn btn-danger border border-amber-700 mt-2' onClick={() => handleDelete(menu._id)}><i className="fa-solid fa-trash"></i></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllFoods;