import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { findBooksAsync } from '../services/actions/book.action';
import { Container } from 'react-bootstrap';

const View = () => {

    const { book, errMsg } = useSelector(state => state.BookReducers);
    
    const { id } = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        if(id){
            dispatch(findBooksAsync(id))
        }
    }, [id])

    if(!book){
        return <div className="loader-container">
                    <div className="glowing-circle">
                        <div className="inner-glow"></div>
                    </div>
                    <div className="loading-text">Loading...</div>
            </div>
    }

    return(
        <>
            {
                errMsg ? <h2 className='text-danger'>{errMsg}</h2>
                :
                <Container>
                    <form action="">
                        <input type="text" value={id} hidden />
                    </form>
                    <Card className='mx-auto mt-5' style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={book.bimage} />
                        <Card.Body>
                            <Card.Title><b>Book Title : </b> {book.bTitle}</Card.Title>
                            <Card.Text><b>Book Author : </b> {book.author}</Card.Text>
                            <Card.Text><b>Genres : </b> {book.genre}</Card.Text>
                            <Card.Text><b>Publication year : </b> {book.pyear}</Card.Text>
                            <Card.Text>
                                <b>Book Info : </b> {book.binfo}
                            </Card.Text>
                            <Card.Text><b>Book Price : </b> {book.bprice}</Card.Text>
                            <Card.Text><b>Total Pages : </b> {book.bpages}</Card.Text>
                            <Link className='success text-success btn border-success' to='/'>Back To Book History</Link>
                        </Card.Body>
                    </Card>
                </Container>
            }
        </>
    )
}
export default View;