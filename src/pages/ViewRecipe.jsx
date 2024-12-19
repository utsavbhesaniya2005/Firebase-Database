import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { findRecipesAsync } from '../services/actions/recipe.action';
import { Container } from 'react-bootstrap';

const View = () => {

    const { recipe, errMsg } = useSelector(state => state.RecipeReducers);
    
    const { id } = useParams();


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            dispatch(findRecipesAsync(id))
        }
    }, [id])

    const handleBack = () => {
        navigate(-1)
    }

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
                    <div className="recipe-tabs-container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="recipe-card">
                                    <div className="recipe-card-header">
                                        <img
                                            src={recipe.rimage}
                                            alt={recipe.resname}
                                            className="recipe-card-image-view" height="150"
                                        />
                                    </div>
                                    <div className="recipe-card-body">
                                        <h2 className='mb-2'>Name : {recipe.resname}</h2>
                                        <h4>Dish Type : {recipe.dishtype}</h4>
                                        <div className="recipe-info">
                                            <div>
                                                <i className="icon">⏱️</i>
                                                <span>{recipe.preptime} Mins</span>
                                            </div>
                                            <div className='m-3'>
                                                <i className="icon">🍴</i>
                                                <span>{recipe.ing} Ingredients</span>
                                            </div>
                                            <div>
                                                <i className="icon">👥</i>
                                                <span>{recipe.nserving} Serving</span>
                                            </div>
                                        </div>
                                        <p className='recipe-description'>Instructions To Make Food : <br />
                                            {recipe.ins}
                                        </p>
                                        <p className="recipe-description">Recipe Steps : {recipe.recsteps}</p>
                                        <button className="view-recipe-button" onClick={handleBack}>Back To Dashboard</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                
            }
        </>
    )
}
export default View;