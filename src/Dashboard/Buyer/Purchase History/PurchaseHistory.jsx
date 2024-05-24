import React from 'react';
import { Helmet } from 'react-helmet';
import DashboardSectionTitle from '../../../Shared/Dashboard Section Title/DashboardSectionTitle';

const PurchaseHistory = () => {
    return (
        <div>
            <Helmet>
                <title>Purchase History || Dashboard || Bistro Boss  Restaurant</title>
            </Helmet>

            <div>
                <DashboardSectionTitle title={"PAYMENT HISTORY"} subtitle={"---At a Glance!----"}></DashboardSectionTitle>
            </div>



        </div>
    );
};

export default PurchaseHistory;