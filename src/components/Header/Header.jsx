import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { userLogoutAsync } from '../../services/actions/auth.action';
import { Button } from 'react-bootstrap';

const Header = () => {

    const { isSignIn } = useSelector(state => state.AuthReducers);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userLogoutAsync());
        navigate('/signIn');
    }

    return(
        <>
            <Navbar collapseOnSelect expand="lg" className='header'>
                <Navbar.Brand >
                        <img src="../src/assets/logo.jpg" className='ms-5' height="100" width="150" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='postion-relative'>
                    <Nav className='ms-auto navbar me-5'>
                        <Nav className='me-5 nav'>
                            <Link to='/add' className='navigate'>Add Recipes</Link>
                        </Nav>
                        <Nav className='me-5 nav'>
                            <Link to='/' className='navigate'>Recipe History</Link>
                        </Nav>
                        {
                            isSignIn ?  
                            <Nav className='nav'>
                                <button onClick={handleLogout} className='navigate bg-transparent'>Log Out</button>
                            </Nav>
                            :
                            <Nav className='nav'>
                                <Link to='/signIn' className='navigate'>Log In</Link>
                            </Nav>
                        }
                        <div className="slide"></div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Header;