import React from 'react';
import img from "../assets/others/404.gif"
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div>
            <Helmet><title>Not Found || Bistro Boss Restaurant</title></Helmet>
            <div className='banner-img'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;