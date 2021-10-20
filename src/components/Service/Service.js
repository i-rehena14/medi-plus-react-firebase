import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="service pb-3">
            <img className="rounded-top pb-4 h-50" src={img} alt="" />
            <div className="text-center">
                <h3>{name}</h3>
                <p className="px-3">{description}</p>
                <Link to={`/serviceDetails/${id}`}>
                    <button className="btn btn-danger">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;