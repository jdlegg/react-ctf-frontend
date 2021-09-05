import { Card, Button, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { checkRegister, register } from "../../api/scoring/scoringAPI";
import '../../App.css';

const Challenges = (props) => { 
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState([]) // handler for error message
    const [reg, setReg] = useState(false)
    
    const clearState = () => {
        setErrorMessage([])
    }

    useEffect( () => {
        checkRegister().then( async (response) => {
            if (response === false) {
                setReg(false)
                }
            else { setReg(true);}
        })
    }, [])

    const handleSubmit = (e) => {
    clearState(); // clears the current error messages if they exist
    e.preventDefault();
    const challenge = {
        flags:[]
        }
    register(challenge)
        .then( async (response) => { 
            if (response.status > 201) {
                let error = await response.json()
                if (error.flag) {
                    setErrorMessage( arr => [...arr, "Flag Error: " + error.flag[0]])
                }
            } else {setReg(true)}; props.scoreUpdate() })
    }

    return(
    <>
        {(reg) ? (
        <div>
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
                        <Button onClick={()=> history.push('/challenge2')} variant="primary">Web App 2</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        </div>) :
        (<form onSubmit={handleSubmit}>
            <label>Register for challenges</label>
            <input type="submit" value="Submit"/>
            { errorMessage && <ul className="error"> {errorMessage.map((item) => (<li>{item}</li>))} </ul>}
        </form>)}
    </>
    )
}
export default Challenges;