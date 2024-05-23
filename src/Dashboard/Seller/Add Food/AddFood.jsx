import React from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import DashboardSectionTitle from '../../../Shared/Dashboard Section Title/DashboardSectionTitle';
import { useForm } from 'react-hook-form';

const AddFood = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (data) => {
        const foodDetails = {
            name: data.recipeName,
            category: data.category,
            price: data.price,
            recipe: data.recipeDetails,
            image: data.file
        }
        console.log(foodDetails)
    }

    return (
        <div>
            <Helmet><title>Add Food || Dashboard || Bistro Boss  Restaurant</title></Helmet>
            <div>
                <DashboardSectionTitle title={"ADD AN ITEM"} subtitle={"---What's new---"}></DashboardSectionTitle>
            </div>

            {/* ----------------------Form--------------------- */}

            <form onSubmit={handleSubmit(onSubmit)} className='w-full bg-slate-100 p-6 my-10 rounded-lg' action="">
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input type="text" {...register("recipeName")} placeholder="recipe name" className="input border border-amber-700 w-full max-w-xs" />

                    </label>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <select {...register("category")} className="select border border-amber-700 w-full max-w-xs">
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Desert</option>
                            <option>Drinks</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="text" {...register("price")} placeholder="price" className="input border border-amber-700 w-full max-w-xs" />

                        </label>
                    </div>
                </div>

                <div>
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea {...register("recipeDetails")} className="textarea border border-amber-700 w-full " placeholder="recipe details..."></textarea>
                </div>

                <div className=''>
                    <input {...register("file")} type="file" className="file-input border border-amber-700 w-full max-w-xs" />
                </div>
                <div className='text-center my-2'>
                    <button type='file' className='btn border border-amber-700'>Add Item</button>
                </div>

            </form>
        </div>
    );
};

export default AddFood;