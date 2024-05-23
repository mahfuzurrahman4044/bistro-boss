import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardSectionTitle from '../../../Shared/Dashboard Section Title/DashboardSectionTitle';

const AddedFoodHistory = () => {
    return (
        <div>
            <Helmet><title>Added Food History || Dashboard || Bistro Boss  Restaurant</title></Helmet>
            <div>
                <DashboardSectionTitle title={"MANAGE ALL ITEMS"} subtitle={"---Hurry Up!---"}></DashboardSectionTitle>
            </div>
        </div>
    );
};

export default AddedFoodHistory;