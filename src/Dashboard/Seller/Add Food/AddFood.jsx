import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import DashboardSectionTitle from '../../../Shared/Dashboard Section Title/DashboardSectionTitle';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../../../Account/Axios Secure/UseAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Account/Provider/AuthProvider';

const AddFood = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = UseAxiosSecure();
    const imageHostingToken = "313da3e4143f5ce0645db9ae759d6a5b";
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const formData = new FormData();
        formData.append("image", data.file[0]);

        try {
            const imgResponse = await fetch(imageHostingUrl, {
                method: "POST",
                body: formData
            }).then(res => res.json());

            console.log(imgResponse)

            if (imgResponse.success) {

                const foodDetails = {
                    email: data.email,
                    name: data.recipeName,
                    category: data.category,
                    price: data.price,
                    recipe: data.recipeDetails,
                    image: imgResponse.data.url
                };

                // console.log(foodDetails);

                axiosSecure.post("menus", foodDetails)
                    .then(data => {
                        console.log(data.data)
                        if (data.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Item has been added",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            reset();
                        }
                    })


            }

        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div>
            <Helmet><title>Add Food || Dashboard || Bistro Boss Restaurant</title></Helmet>
            <div>
                <DashboardSectionTitle title={"ADD AN ITEM"} subtitle={"---What's new---"} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='w-full bg-slate-100 p-6 my-10 rounded-lg'>
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" {...register("email")} value={user?.email} className="input border border-amber-700 w-full max-w-xs" />
                    </label>
                </div>
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input required type="text" {...register("recipeName")} placeholder="recipe name" className="input border border-amber-700 w-full max-w-xs" />
                    </label>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <select required {...register("category")} className="select border border-amber-700 w-full max-w-xs">
                            <option>salad</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>dessert</option>
                            <option>drinks</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input required type="number" {...register("price")} placeholder="price" className="input border border-amber-700 w-full max-w-xs" />
                        </label>
                    </div>
                </div>

                <div>
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea {...register("recipeDetails")} maxLength={"100"} className="textarea border border-amber-700 w-full " placeholder="recipe details..."></textarea>
                </div>

                <div>
                    <input required {...register("file")} type="file" className="file-input border border-amber-700 w-full max-w-xs" />
                </div>
                <div className='text-center my-2'>
                    <button type='submit' className='btn border border-amber-700'>Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;
