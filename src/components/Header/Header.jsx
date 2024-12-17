import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

const Header = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-black" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >
                        <img src="../src/assets/logo.jpg" height="50" width="100" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav className='me-5'>
                            <Link to='/add' className='navigate'>Add Book</Link>
                        </Nav>
                        <Nav>
                            <Link to='/' className='navigate'>Book History</Link>
                        </Nav>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;