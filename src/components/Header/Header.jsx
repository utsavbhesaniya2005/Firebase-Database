import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

const Header = () => {
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
                        <Nav className='nav'>
                            <Link to='/' className='navigate'>Recipe History</Link>
                        </Nav>
                        <div className="slide"></div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Header;