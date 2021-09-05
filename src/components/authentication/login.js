import { useState } from "react";
import { loginUser } from '../../api/authentication/authAPI';
import { Redirect } from 'react-router';
import Individualscore from "../scoring/Individualscore";
import { Form, Button, Row, Col } from "react-bootstrap";

const Login = (props) => {
    const [username, setUsername] = useState('') // username to create credentials
    const [password, setPassword] = useState('') // password to create credentials
    const [redirect, setRedirect] = useState(false) // handler to redirect if authenticated
    const [errorMessage, setErrorMessage] = useState('') // handler for error message
    
    const clearState = () => {
        setErrorMessage([])
    }

    // store credentials into state
    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
            clearState()
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
            clearState()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // stop default actions from happening on submit
        // build user cred object to pass to authAPI components
        const userCred = {
            username: username,
            password: password,
        }
        //console.log(userCred)
        // pass userCreds into loginUser
        loginUser(userCred)
            .then( async (response) => { 
                // Create error message
                if (response.status !== 200) {
                    let error = await response.json()
                    setErrorMessage(error.detail)
                } else {
                    // Set localStorage with tokens and isAuth/Redirect
                    let token = await response.json()
                    console.log("Token: ",token);
                    localStorage.setItem('access_token', token.access);
                    localStorage.setItem('refresh_token', token.refresh);
                    props.setIsAuth(true);
                    props.setScore(<Individualscore/>)
                    setRedirect(true);
                }})
    }

    if (redirect) {
        return <Redirect to = "/challenges"/> // move here if redirected
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Row className="mx-auto" style={{width: "100%"}}>
                <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Control inline name="username" type="text" placeholder="Enter username" value={username} onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control inline name="password" type="password" placeholder="Enter password" value={password} onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSubmit">
                    <Button variant="primary" type="submit">Login</Button>
                </Form.Group>
            </Row>       
            {errorMessage && <div className="text-white">{errorMessage}</div>}
        </Form>
    )
}
export default Login;
