import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { findRecipesAsync } from '../services/actions/recipe.action';
import { Container } from 'react-bootstrap';

const View = () => {

    const { recipe, errMsg } = useSelector(state => state.RecipeReducers);
    
    const { id } = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        if(id){
            dispatch(findRecipesAsync(id))
        }
    }, [id])

    if(!recipe){
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
                        <Card.Img variant="top" src={recipe.bimage} />
                        <Card.Body>
                            <Card.Title><b>Book Title : </b> {recipe.bTitle}</Card.Title>
                            <Card.Text><b>Book Author : </b> {recipe.author}</Card.Text>
                            <Card.Text><b>Genres : </b> {recipe.genre}</Card.Text>
                            <Card.Text><b>Publication year : </b> {recipe.pyear}</Card.Text>
                            <Card.Text>
                                <b>Book Info : </b> {recipe.binfo}
                            </Card.Text>
                            <Card.Text><b>Book Price : </b> {recipe.bprice}</Card.Text>
                            <Card.Text><b>Total Pages : </b> {recipe.bpages}</Card.Text>
                            <Link className='success text-success btn border-success' to='/'>Back To Book History</Link>
                        </Card.Body>
                    </Card>
                </Container>
            }
        </>
    )
}
export default View;