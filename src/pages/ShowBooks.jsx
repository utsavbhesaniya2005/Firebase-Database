/* eslint-disable no-undef */
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteBookAsync, findBooksAsync, getBooksAsync } from '../services/actions/book.action'
import { useEffect } from 'react';

const CamelHistory = () => {

    const {books, isLoading, errMsg} = useSelector(state => state.BookReducers);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id) => {
        dispatch(deleteBookAsync(id))
    }

    const handleView = (id) => {
        dispatch(findBooksAsync(id))
        navigate(`/view/${id}`)
    }

    useEffect(() => {
        dispatch(getBooksAsync())
    }, [])  

    return(
        <>
            {
                errMsg 
                ?   <h1 className='text-danger'>{errMsg}</h1> 
                :   
                    isLoading 
                    ?   
                    <div className="loader-container">
                        <div className="glowing-circle">
                            <div className="inner-glow"></div>
                        </div>
                        <div className="loading-text">Loading...</div>
                    </div>
                    :
                    <Table striped bordered hover className='mt-5' data-bs-theme="dark">
                        <thead>
                            <tr>
                                <th>Book Title</th>
                                <th>Author</th>
                                <th>Genres</th>
                                <th>Publication Year</th>
                                <th>Book Info</th>
                                <th>Price</th>
                                <th>Total Pages</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.bTitle}</td>
                                        <td>{data.author}</td>
                                        <td>{data.genre}</td>
                                        <td>{data.pyear}</td>
                                        <td>{data.binfo}</td>
                                        <td>{data.bprice}</td>
                                        <td>{data.bpages}</td>
                                        <td>
                                            <Button className='primary text-primary'  onClick={() => handleEdit(data.id)}>Edit</Button>
                                            || <Button className='danger text-danger border-danger' onClick={() => handleDelete(data.id)}>Delete</Button>
                                            || <Button className='success text-success border-success' onClick={() => handleView(data.id)}>View</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
            }
        </>
    )
}
export default CamelHistory;