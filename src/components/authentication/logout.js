import { logout } from '../../api/authentication/authAPI';
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Logout = (props) => {
    let history = useHistory();

    const handleLogout = async () => {
        try {
            if (localStorage.getItem('access_token') === null) {
            return(
                <div>
                    <h2> Something went wrong!!! Maybe you are not logged in!!! </h2>
                </div>
            )
            } else {
                logout().then((response) => { localStorage.removeItem('access_token'); localStorage.removeItem('refresh_token')})
                props.setIsAuth(false)
                history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return <Button onClick={handleLogout}>Logout</Button>
}

export default Logout;