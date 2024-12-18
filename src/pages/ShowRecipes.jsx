/* eslint-disable no-undef */
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteRecipeAsync, findRecipesAsync, getRecipesAsync } from '../services/actions/recipe.action'
import { useEffect } from 'react';

const CamelHistory = () => {

    const {recipes, isLoading, errMsg} = useSelector(state => state.RecipeReducers);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id) => {
        dispatch(deleteRecipeAsync(id))
    }

    const handleView = (id) => {
        dispatch(findRecipesAsync(id))
        navigate(`/view/${id}`)
    }

    useEffect(() => {
        dispatch(getRecipesAsync())
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
                                <th>Recipe Name</th>
                                <th>Dish Type</th>
                                <th>Prep. Time</th>
                                <th>No. Of Serving</th>
                                <th>Cooking Time</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipes.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.resname}</td>
                                        <td>{data.dishtype}</td>
                                        <td>{data.preptime}</td>
                                        <td>{data.nserving}</td>
                                        <td>{data.ctime}</td>
                                        <td>{data.fname}</td>
                                        <td>{data.lname}</td>
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