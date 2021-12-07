import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../images/Background.png';
import Services from '../Services/Services';
import Team from '../Team/Team';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className="banner-container container-fluid" style={{ backgroundImage: `url(${banner})` }}>
                <Container>
                    <div className="banner-text  ">
                        <h1 className=" fs-1 fw-bold pb-4 pt-4">Healthy <span className="text-danger banner-text">Heart</span>, Healthy Family</h1>
                        <p className="w-50">Cardiology is a unique, all-encompassing specialty covering primary/secondary prevention and acute/chronic conditions with medical, percutaneous and surgical management options. The specialty has a solid evidence-base and a plethora of research opportunities from bench to bedside.</p>
                    </div>
                    <button className="btn-danger border rounded p-2">Learn More</button>
                </Container>
            </div>
            <Services></Services>
            <Team></Team>
        </div>
    );
};

export default Home;