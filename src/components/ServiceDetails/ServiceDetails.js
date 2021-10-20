import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([])
    const [singleService, setSingle] = useState({})
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    useEffect(() => {
        const find = services.find(service => service.id === +serviceId)
        setSingle(find);
    }, [services])
    const history = useHistory();
    const handleClick = () => {
        history.push('/Home#services');
    }

    return (
        <div className="container">
            <img src={singleService?.img} alt="" />
            <h2 className="text-danger">{singleService?.name}</h2>
            <p>{singleService?.description}</p>
            <h2 className="text-danger">Doctor : {singleService?.doctor}</h2>
            <h3>Price : ${singleService?.price}</h3>
        </div>
    );
};
export default ServiceDetails;