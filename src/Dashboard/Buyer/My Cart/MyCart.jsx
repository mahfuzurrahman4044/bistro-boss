import React from 'react';
import UseCarts from '../../../UseQuery/Use Carts/UseCarts';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [isLoading, carts, refetch] = UseCarts()
    console.log(carts)
    const total = carts.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/deleteCart/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }
    return (
        <div>
            <Helmet><title>My Cart || Dashboard || Bistro Boss  Restaurant</title></Helmet>
            <div>
                <SectionTitle title={"My Cart"}></SectionTitle>
            </div>
            <div className='font-serif font-semibold flex justify-around items-center'>
                <h2 className='text-xl'>Total Items: {carts.length}</h2>
                <h2 className='text-xl'>Total Price: {total}</h2>
                <button className='btn btn-ghost border border-amber-700'>Pay</button>
            </div>


            {/* --------------------------Table----------------- */}
            <div className='mt-4'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className=''>
                            <tr className='text-xl bg-base-100'>
                                <th>#</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((cart, index) =>
                                    <tr key={cart._id} className='text-center'>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{cart.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {cart.price}
                                        </td>
                                        <td className='btn btn-danger border border-amber-700' onClick={() => handleDelete(cart._id)}>Delete</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;