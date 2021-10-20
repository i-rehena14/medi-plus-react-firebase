import React from 'react';
import banner from '../../images/Background.png';
import Services from '../Services/Services';
import Team from '../Team/Team';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className="banner-container" style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-50 p-4 ">
                    <h1 className="ms-4 p-4 fs-1 fw-bold pb-4">Healthy <span className="text-danger banner-text">Heart</span>, Healthy Family</h1>
                    <p className="banner-text ms-4">Cardiology is a unique, all-encompassing specialty covering primary/secondary prevention and acute/chronic conditions with medical, percutaneous and surgical management options. The specialty has a solid evidence-base and a plethora of research opportunities from bench to bedside.</p>
                </div>
            </div>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Home;