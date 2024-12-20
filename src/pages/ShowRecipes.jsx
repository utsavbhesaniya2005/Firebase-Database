/* eslint-disable no-undef */
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteRecipeAsync, findRecipesAsync, getRecipesAsync } from '../services/actions/recipe.action'
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader'

const ShowRecipes = () => {

    const {recipes, isLoading, errMsg} = useSelector(state => state.RecipeReducers);

    const [searchItem, setSearchItem] = useState('');
    const [filteredRecipes, setFilterRecipes] = useState([])

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
    }


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
    }, [dispatch])  

    useEffect(() => {
        const filteredItems = recipes.filter((recipe) => 
            recipe.resname.toLowerCase().includes(searchItem.toLowerCase())
        );

        setFilterRecipes(filteredItems)
    }, [recipes, searchItem])

    return(
        <>
            {
                recipes.length === 0 
                ? <h1 className='text-warning mt-5'>No Recipes Found.!</h1> 
                :
                errMsg 
                ?   <h1 className='text-danger'>{errMsg}</h1> 
                :   
                    isLoading 
                    ?   
                    <Loader />
                    :
                    <div className="container mt-5">
                        <div className="row row-gap-5">
                            <div className="col-12">
                                <Form className='mb-5'>
                                    <Form.Group className="mb-3 d-flex" controlId="rsearch">
                                        <Form.Label className='recipe-label'>Recipe&nbsp;Search&nbsp;:</Form.Label>&nbsp;
                                        <Form.Control type="text" placeholder="Search By Recipe Name"  className='recipe-search' value={searchItem} onChange={handleInputChange} />
                                    </Form.Group>
                                </Form>
                            </div>
                            {
                                filteredRecipes.map((data, index) => (
                                    <div className="col-4" key={index}>
                                        <div className="recipe-card-show">
                                            <div className="recipe-card-header rounded overflow-hidden">
                                                <img 
                                                src={data.rimage || '../src/assets/default-img.png'}
                                                alt="Recipe Image"
                                                className="recipe-card-image text-black rounded"
                                                />
                                            </div>
                                            <div className="recipe-card-body">
                                                <h2 className='my-3'>Recipe Name : {data.resname}</h2>
                                                <h4 className='mb-2'>Dish Type : {data.dishtype}</h4>
                                                <div className="recipe-info">
                                                <div>
                                                    <i className="icon">⏱️</i>
                                                    <span>{data.preptime}</span>
                                                </div>
                                                <div>
                                                    <i className="icon">🍴</i>
                                                    <span>{data.ing} Ingrediants</span>
                                                </div>
                                                <div>
                                                    <i className="icon">👥</i>
                                                    <span>{data.nserving} Serving</span>
                                                </div>
                                                </div>
                                                <p className="recipe-description">Recipe Instructions : {data.ins}</p>
                                                <p className="recipe-description">Recipe Steps : {data.recsteps}</p>
                                                <Button className='primary text-primary' onClick={() => handleEdit(data.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  fill='#0d6efd'><path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.7-9.2L288 94.6z"/></svg>
                                                </Button> <span className='text-black'>||</span> <Button className='danger text-danger border-danger' onClick={() => handleDelete(data.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#dc3545'><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>
                                                </Button> 
                                                <span className='text-black'>||</span> 
                                                <Button className='success text-success border-success' onClick={() => handleView(data.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#198754'><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>     
                                ))
                            } 
                        </div>
                    </div>
            }
        </>
    )
}
export default ShowRecipes;