import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { findBooksAsync, updateBookAsync } from '../services/actions/book.action';
import { useNavigate, useParams } from 'react-router';

const EditBook = () => {

    const {book, errMsg} = useSelector(state => state.BookReducers);

    const [formData, setFormData] = useState({
        id : '',
        bTitle: '',
        author: '',
        bimage : '',
        genre: '',
        pyear : '',
        binfo : '',
        bprice : '',
        bpages : ''
    });
    
    const { id } = useParams();


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {

        const { name, value, files } = e.target;
    
        if(name === "bimage" && files.length > 0){
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({

                    ...prevData,
                    [name] : reader.result,
                }));
            };
            reader.readAsDataURL(file); 
        }else{
            setFormData((prevData) => ({

                ...prevData,
                [name] : value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBookAsync(formData))
        navigate('/');
    };

    useEffect(() => {
        dispatch(findBooksAsync(id))
    }, [])

    useEffect(() => {
        if(book){
            setFormData(book)
        }
    }, [book])

    return(
        <>
            <Container>
                <h1 className="mt-3 my-5">Camel Edit Form</h1>

                {
                    errMsg 
                    ? 
                    <h2 className='text-danger'>{errMsg}</h2>
                    :
                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="id">
                            <Form.Control type="text" name="id" value={formData.id} onChange={handleChange} hidden/>
                        </Form.Group>

                        <Row className='mb-3 justify-content-between'>
                            <Col md={5}>
                                <Form.Group controlId="bTitle">
                                    <Form.Label>Book Title : </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Title" name="bTitle" value={formData.bTitle} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={5}>
                                <Form.Group controlId="author">
                                    <Form.Label>Author : </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Owner Name" name="author" value={formData.author} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={8}>
                                <Form.Group controlId="bimage" className='mt-5'>
                                    <Form.Label>Book Image : </Form.Label>
                                    <Form.Control type="file" placeholder="Enter Book Image" name="bimage" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='my-5 justify-content-between'>
                            <Col md={7}>
                                <Form.Group controlId="genre">
                                    <Form.Label>Genre : </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Genre" name="genre" value={formData.genre} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group controlId="pyear">
                                    <Form.Label>Publication Year : </Form.Label>
                                    <Form.Control type="number" placeholder="Enter Publication Year" name="pyear" value={formData.pyear} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={5}>
                                <Form.Group controlId="bprice" className='mt-5'>
                                    <Form.Label>Book Price : </Form.Label>
                                    <Form.Control type="number" placeholder="Enter Book Price" name="bprice" value={formData.bprice} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={5}>
                                <Form.Group controlId="bpages" className='mt-5'>
                                    <Form.Label>Book Pages : </Form.Label>
                                    <Form.Control type="number" placeholder="Enter Book Pages" name="bpages" value={formData.bpages} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='my-5'>
                            <Col md={12}>
                                <Form.Group controlId="binfo">
                                    <Form.Label>Book Information : </Form.Label>
                                    <textarea className='form-control' rows="2" cols="5" type="text" placeholder="Enter Book Information" name="binfo" value={formData.binfo} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button variant="primary" type="submit">Update Book</Button>
                    </Form>
                }
            </Container>
        </>
    )
}
export default EditBook;