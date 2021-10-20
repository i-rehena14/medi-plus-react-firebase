import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import TeamMemebr from '../TeamMember/TeamMemebr';

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeam(data));
    }, [])
    return (
        <div>
            <h2 className="fs-1 fw-bold mt-5 text-center">Our <span className="text-danger">Team</span> </h2>
            <div className="">
                <Row xs={1} md={2} lg={4} className="g-2">
                    {
                        team.map(teamMember =>
                            <Col>
                                <TeamMemebr
                                    key={teamMember.id}
                                    teamMember={teamMember}
                                ></TeamMemebr>
                            </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Team;