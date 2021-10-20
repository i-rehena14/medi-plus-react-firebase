import React from 'react';
import { Card, Col } from 'react-bootstrap';

const TeamMemebr = (props) => {
    const { id, name, img, position } = props.teamMember;
    return (
        <div className="m-4">
            <Card>
                <Card.Img className="" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="fw-light">
                        {position}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default TeamMemebr;