import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { findRecipesAsync, updateRecipeAsync } from '../services/actions/recipe.action';
import { useNavigate, useParams } from 'react-router';
import './AddRecipe.css'

const EditRecipe = () => {

    const {recipe, errMsg} = useSelector(state => state.RecipeReducers);

    const [formData, setFormData] = useState({
        resname: '',
        dishtype: '',
        preptime : '',
        nserving: '',
        rimage : '',
        recsteps : '',
        ing : '',
        ins : '' 
    });
    
    const { id } = useParams();


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prev) => ({
                ...prev,
                rimage: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateRecipeAsync(formData))
        navigate('/');
    };

    useEffect(() => {
        dispatch(findRecipesAsync(id))
    }, [])

    useEffect(() => {
        if(recipe){
            setFormData(recipe)
        }
    }, [recipe])

    return(
        <>
            <Container className='addRec'>
                <h1 className="mt-3 my-5">Recipe Edit Form</h1>

                {
                    errMsg 
                    ? 
                    <h2 className='text-danger'>{errMsg}</h2>
                    :
                    <Form onSubmit={handleSubmit}>
                        <Row className='mb-3 justify-content-between'>
                            <Col md={5}>
                                <Form.Group controlId="resname">
                                    <Form.Label>Recipe Name : </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Recipe Name" name="resname" value={formData.resname} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={5}>
                                <Form.Group controlId="dishtype">
                                    <Form.Label>Dish Type : </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Dish Type" name="dishtype" value={formData.dishtype} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={8}>
                                <Form.Group controlId="preptime" className='mt-5'>
                                    <Form.Label>Preparation Time : </Form.Label>
                                    <Form.Control type="number" placeholder="Ex: 20 Mins" name="preptime" value={formData.preptime} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group controlId="rimage" className='mt-5'>
                                    <Form.Label>Recipe Image : </Form.Label>
                                    <Form.Control type="file" placeholder="Add Recipe Image" name="rimage" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='my-5 justify-content-between'>
                            <Col md={7}>
                                <Form.Group controlId="nserving">
                                    <Form.Label>No. of Servings : </Form.Label>
                                    <Form.Control type="number" placeholder="Ex: 4" name="nserving" value={formData.nserving} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group controlId="ing" className='mt-5'>
                                    <Form.Label>Ingrediants : </Form.Label>
                                    <Form.Control type="number" placeholder="Ex : 5" name="ing" value={formData.ing} onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group controlId="ins" className='mt-5'>
                                    <Form.Label>Instructions : </Form.Label>
                                    <textarea className='form-control' rows="2" cols="5" type="text" placeholder="Enter Instructions" name="recsteps" value={formData.ins} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='my-5'>
                            <Col md={12}>
                                <Form.Group controlId="recsteps">
                                    <Form.Label>Book Information : </Form.Label>
                                    <textarea className='form-control' rows="2" cols="5" type="text" placeholder="Enter Recipe Steps" name="recsteps" value={formData.recsteps} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button variant="success" type="submit">Update Recipe</Button>
                    </Form>
                }
            </Container>
        </>
    )
}
export default EditRecipe;