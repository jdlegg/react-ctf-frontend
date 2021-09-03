import React from 'react';
import Login from '../authentication/login';
import { 
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavDisplay,
  NavLogin,
} from './NavbarElements';
  
const Navbar = (props) => {
    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
                {/* <NavLink to='/unprotected' activeStyle> Unprotected </NavLink> */}
                {(!props.isAuth) && (<NavLink to='/signup' activeStyle> Signup </NavLink>)}
                {/* {(props.isAuth) && (<NavLink to='/protected' activeStyle>Protected View inside Auth </NavLink>)} */}
                {(props.isAuth) && (<NavLink to='/highscore' activeStyle>High Score </NavLink>)}
                {/* {(props.isAuth) && (<NavLink to='/ind_score' activeStyle>Individual Score </NavLink>)} */}
                {(props.isAuth) && (<NavLink to='/challenges' activeStyle>Challenges </NavLink>)}
                {(props.isAuth) && (<NavLink to='/register' activeStyle>Register Challenge </NavLink>)}
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                
            </NavMenu>
            <NavMenu>
                <NavBtn>
                    {(props.isAuth) && (<NavDisplay>Score: {props.score}</NavDisplay>)}
                    {/* {(props.isAuth) ? (<NavBtnLink to='/logout'>Logout</NavBtnLink>) : (<NavBtnLink to='/login'>Login</NavBtnLink>)} */}
                    {(props.isAuth) ? (<NavBtnLink to='/logout'>Logout</NavBtnLink>) : (<NavLogin><Login setScore={props.setScore} setIsAuth={props.setIsAuth}/></NavLogin>)}
                </NavBtn>
            </NavMenu>
        </Nav>
        </>
  );
};
  
export default Navbar;