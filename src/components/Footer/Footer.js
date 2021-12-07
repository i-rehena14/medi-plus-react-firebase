import React from 'react';

const Footer = () => {
    return (
        <div className="mb-0 bg-danger mt-4 text-white text-center footer">
            <div className="d-flex m-4 p-4">
                <div className="w-50">
                    <h2>MediPlus</h2>
                    <p>We are always here at your service.</p>
                </div>
                <div>
                    {/* -------contact info----- */}
                    <h2>Contact Info</h2>
                    <li>email: mediplus@medi.com</li>
                    <li>Call us: 880-2313xxx</li>
                </div>
            </div>
            <p className="m-0">Copyright&copy;2021.All rights reserved.</p>
        </div>
    );
};

export default Footer;