import React from 'react';
import Team from '../Team/Team';
import banner2 from '../../images/about.png';

const AboutUs = () => {
    return (
        <div>
            <div className="banner-container" style={{ backgroundImage: `url(${banner2})` }}>
                <div className="w-50 p-4 ">
                    <h2 className="fs-1 fw-bold mt-5 text-center">About <span className="text-danger">Us</span> </h2>
                </div>
            </div>
            <Team></Team>
        </div>
    );
};

export default AboutUs;