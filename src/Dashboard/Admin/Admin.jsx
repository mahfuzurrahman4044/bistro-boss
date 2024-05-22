import React from 'react';
import { Helmet } from 'react-helmet';
import UseUsers from '../../UseQuery/UseUsers/UseUsers';

const Admin = () => {
    const [isLoading, users, refetch] = UseUsers();
    console.log(users);

    const handleMakeAdmin = (userId) => {
        console.log(userId);
    };

    const handleMakeSeller = (userId) => {
        console.log(userId);
    };

    return (
        <div>
            <Helmet><title>Admin || Dashboard || Bistro Boss Restaurant</title></Helmet>

            <div className='font-serif font-semibold flex justify-around items-center'>
                <h2 className='text-xl'>Total Users: {users.length}</h2>
            </div>

            {/* ------------------Table---------------------- */}

            <div className='mt-4'>
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
                                                        <div className='btn btn-danger border border-amber-700 mx-1' onClick={() => handleMakeSeller(user._id)}>
                                                            <i className="fa-solid fa-user-tag"></i>
                                                        </div>
                                                    </> : user.role === "seller" ?
                                                        <>
                                                            <div className='btn btn-danger border border-amber-700 mx-1' onClick={() => handleMakeAdmin(user._id)}>
                                                                <i className="fa-solid fa-user-plus"></i>
                                                            </div>
                                                        </> : <>
                                                            <div className='btn btn-danger border border-amber-700 mx-1' onClick={() => handleMakeAdmin(user._id)}>
                                                                <i className="fa-solid fa-user-plus"></i>
                                                            </div>
                                                            <div className='btn btn-danger border border-amber-700 mx-1' onClick={() => handleMakeSeller(user._id)}>
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
