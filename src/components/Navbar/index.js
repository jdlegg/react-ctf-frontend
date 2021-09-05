import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import Login from '../authentication/login';
import { AppContext } from '../../context';
import Logout from '../authentication/logout';
import { Navbar, Nav, Container } from 'react-bootstrap';
  
const BootstrapNavbar = (props) => {
    const { score } = useContext(AppContext);

    return (
        <div>
        <div className="row">
        <div className="col-md-12">
        <Navbar bg="dark" variant="dark" expand="lg" stick="top" collapseOnSelect>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                {(!props.isAuth) && (<Nav.Link as={Link} to='/signup'>Signup</Nav.Link>)}
                {(props.isAuth) && (<Nav.Link as={Link} to='/highscore'>High Score</Nav.Link>)}
                {(props.isAuth) && (<Nav.Link as={Link} to='/challenges'>Challenges</Nav.Link>)}
            </Nav>
            <Container className="justify-content-end" style={{width:"70%"}}>
            {(props.isAuth) && (<Navbar.Text>Score:</Navbar.Text>)}
            {(props.isAuth) && (<Navbar.Text className="py-2 px-md-3">{score}</Navbar.Text>)}
            {(props.isAuth) ? (<Nav> <Logout setIsAuth={props.setIsAuth}/></Nav>) : (<Nav className="justify-content-end" style={{width:"100%"}}><Login setScore={props.setScore} setIsAuth={props.setIsAuth}/></Nav>)}
            </Container>
        </Navbar.Collapse>
        </Navbar>
        </div>
        </div>
        </div>
  );
};
  
export default BootstrapNavbar;