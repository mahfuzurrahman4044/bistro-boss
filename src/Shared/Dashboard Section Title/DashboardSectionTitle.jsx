import React from 'react';

const DashboardSectionTitle = ({title, subtitle}) => {
    return (
        <div>
            <div className="text-center mx-auto">
                <p className="text-yellow-600 my-2">{subtitle}</p>
                <h2 className="text-4xl border-y-4 py-2">{title}</h2>
            </div>
        </div>
    );
};

export default DashboardSectionTitle;