import { useState } from "react";
import { loginUser } from '../../api/authentication/authAPI';
import { Redirect } from 'react-router';
import Individualscore from "../scoring/Individualscore";

const Login = (props) => {
    const [username, setUsername] = useState('') // username to create credentials
    const [password, setPassword] = useState('') // password to create credentials
    const [redirect, setRedirect] = useState(false) // handler to redirect if authenticated
    const [errorMessage, setErrorMessage] = useState('') // handler for error message
    
    // store credentials into state
    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: &nbsp;
                    <input name="username" type="text" value={username} onChange={handleChange} style={{width: "120px", height: "30px" }}/>
                    &nbsp;
                </label>
                <label>
                    Password: &nbsp;
                    <input name="password" type="password" value={password} onChange={handleChange} style={{width: "120px", height: "30px" }}/>
                    &nbsp;
                </label>
                <input type="submit" value="Login"/>
                { errorMessage && <p className="error" style={{color: '#000000', fontWeight: 'Bold', }}> {errorMessage} </p>}
            </form>
        </div>
    )
}
export default Login;