import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { resetSignInErr, signInAsync, signInWithGoogle } from "../services/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

const SignIn = () => {

    const [signInInput, setSignInInput] = useState({
        email : '',
        pass : ''
    });

    const { isSignIn, isSignInErr } = useSelector(state => state.AuthReducers);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {

        setSignInInput((prevdata) => ({
            ...prevdata,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(signInAsync(signInInput));
    }

    const handleGoogle = () => {
        dispatch(signInWithGoogle());
    }

    const handleBack = () => {
        dispatch(resetSignInErr())
    }

    useEffect(() => {
        if(isSignIn){
            navigate('/')
        }
    }, [isSignIn])

    return(
        <>
            {
                isSignInErr ? <div className="err signIn">
                    <h1 className="text-danger mt-5">{isSignInErr}</h1>
                    <Button className="mt-4 signUp" onClick={handleBack}>Go Back</Button>
                </div>
                :
                <Container className="signIn">
                    <h1 className="mt-3 mb-5">Sign In</h1>
                    <Form onSubmit={handleSubmit} className="p-3">
                        <Row className='mb-3 justify-content-between'>

                            <Col md={12}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email : </Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email Here" name="email" value={signInInput.email} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="pass" className='mt-5'>
                                    <Form.Label>Password : </Form.Label>
                                    <Form.Control type="password" placeholder="Enter Your Password" name="pass" value={signInInput.pass} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="cpass" className='mt-5'>
                                    <h4>Don't have an account? <Link to='/signUp'>Sign Up Now</Link></h4>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button type="submit" className="mt-4 signUp">Sign In</Button><br /><br />

                        <span>Or Login With</span><br /><br />

                        <Button variant="light" onClick={handleGoogle}>Google</Button>
                    </Form>
                </Container>
            }
        </>
    )
}
export default SignIn;