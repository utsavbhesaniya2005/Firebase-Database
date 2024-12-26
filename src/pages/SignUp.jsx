import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";  
import { useDispatch, useSelector } from "react-redux";
import { resetSignUpErr, signUpAsync } from "../services/actions/auth.action";
import { Link, useNavigate } from "react-router";

const SignUp = () => {

    const [signUpInput, setSignUpInput] = useState({
        uname : '',
        email : '',
        pass : '',
        cpass : ''
    });

    const { isCreate, isSignUpErr } = useSelector(state => state.AuthReducers);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {

        setSignUpInput((prevdata) => ({
            ...prevdata,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(signUpInput.pass == signUpInput.cpass){
            dispatch(signUpAsync(signUpInput))
        }
    }

    const handleBack = () => {
        dispatch(resetSignUpErr())
    }

    useEffect(() => {
        if(isCreate){
            navigate('/signIn')
        }
    }, [isCreate])

    return(
        <>
            {
                isSignUpErr ? <div className="err addRec">
                    <h1 className="text-danger mt-5">{isSignUpErr}</h1>
                    <Button className="mt-4 signUp" onClick={handleBack}>Go Back</Button>
                </div>
                :
                <Container className="addRec">
                    <h1 className="mt-3 mb-5">Sign Up</h1>
                    <Form onSubmit={handleSubmit}>
                        <Row className='mb-3 justify-content-between'>
                            <Col md={12} className="mb-5">
                                <Form.Group controlId="uname">
                                    <Form.Label>User Name : </Form.Label>
                                    <Form.Control type="text" placeholder="Enter User Name" name="uname" value={signUpInput.uname} onChange={handleChange} />
                                </Form.Group>
                            </Col>
    
                            <Col md={12}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email : </Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Email Here" name="email" value={signUpInput.email} onChange={handleChange} />
                                </Form.Group>
                            </Col>
    
                            <Col md={12}>
                                <Form.Group controlId="pass" className='mt-5'>
                                    <Form.Label>Password : </Form.Label>
                                    <Form.Control type="password" placeholder="Enter Your Password" name="pass" value={signUpInput.pass} onChange={handleChange} />
                                </Form.Group>
                            </Col>
    
                            <Col md={12}>
                                <Form.Group controlId="cpass" className='mt-5'>
                                    <Form.Label>Confirm Password : </Form.Label>
                                    <Form.Control type="password" placeholder="Enter Confirm Password" name="cpass" onChange={handleChange} value={signUpInput.cpass} />
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="cpass" className='mt-5'>
                                    <h4>Already have an account? <Link to='/signIn'>Sign In Now</Link></h4>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Button type="submit" className="mt-4 signUp">Sign Up</Button>
                        
                    </Form>
                </Container>
            }
        </>
    )
}
export default SignUp;