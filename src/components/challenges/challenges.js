import { Card, Button, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import React from 'react';

import '../../App.css';

const Challenges = (props) => { 
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return(
        <div className="container" style={{ marginTop: '20px'}}>
            <Row>
                <Col xs={6} md={6}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Web Application 1</Card.Title>
                        <Card.Text>
                        Can you find the flag?
                        </Card.Text>
                        <Button onClick={()=> history.push('/challenge1')} variant="primary">Web App 1</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={6}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Web Application 2</Card.Title>
                        <Card.Text>
                        Onto the next level...
                        </Card.Text>
                        <Button onClick={()=> history.push('/challenge1')} variant="primary">Web App 2</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Challenges;