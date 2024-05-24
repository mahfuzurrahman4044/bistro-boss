import React from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import UseUsers from '../../UseQuery/Use Users/UseUsers';
import DashboardSectionTitle from '../../Shared/Dashboard Section Title/DashboardSectionTitle';

const Admin = () => {
    const [isLoading, users, refetch] = UseUsers();
    console.log(users);

    const handleMakeAdmin = (user) => {
        console.log(user);

        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.displayName} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            })
    };

    const handleMakeSeller = (user) => {
        console.log(user);

        fetch(`http://localhost:5000/users/seller/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.displayName} is seller now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch()
            })
    };

    return (
        <div>
            <Helmet><title>Admin || Dashboard || Bistro Boss Restaurant</title></Helmet>

            <div>
                <DashboardSectionTitle title={"MANAGE ALL USERS"} subtitle={"---How many---"}></DashboardSectionTitle>
            </div>

            <div className='font-serif font-semibold flex justify-around items-center my-6'>
                <h2 className='text-xl'>Total Users: {users.length}</h2>
            </div>

            {/* ------------------Table---------------------- */}

            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-yellow-600'>
                            <tr className='text-xl p-2 text-center'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={user._id} className='text-center'>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.photoURL} alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.displayName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user?.role}</td>
                                        <td>
                                            {
                                                user.role === "admin" ?
                                                    <>
                                                        <div className='btn btn-danger border border-amber-700 mx-1' onClick={() => handleMakeSeller(user)}>
                                                            <i className="fa-solid fa-user-tag"></i>
                                                        </div>
                                                    </> : user.role === "seller" ?
                                                        <>
                                                            <div className='btn btn-danger border border-amber-700 mx-1' onClick={() => handleMakeAdmin(user)}>
                                                                <i className="fa-solid fa-user-plus"></i>
                                                            </div>
                                                        </> : <>
                                                            <div className='btn btn-danger border border-amber-700 mx-1' onClick={() => handleMakeAdmin(user)}>
                                                                <i className="fa-solid fa-user-plus"></i>
                                                            </div>
                                                            <div className='btn btn-danger border border-amber-700 mx-1' onClick={() => handleMakeSeller(user)}>
                                                                <i className="fa-solid fa-user-tag"></i>
                                                            </div></>
                                            }

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Admin;
