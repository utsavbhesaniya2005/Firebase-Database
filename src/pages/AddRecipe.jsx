import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AddRecipesAsync } from '../services/actions/recipe.action';
import { useNavigate } from 'react-router';
import './AddRecipe.css'
// import generateUniqueId from 'generate-unique-id';

const AddRecipe = () => {

    const {isSuccess, errMsg} = useSelector(state => state.RecipeReducers)

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

        if (!formData.resname || !formData.dishtype || !formData.preptime || !formData.nserving || !formData.rimage || !formData.ctime || !formData.recsteps || !formData.ing || !formData.ins) {
            alert("Please fill in all required fields");
            return;
        }

        dispatch(AddRecipesAsync(formData));
        navigate('/');
    };

    useEffect(() => {
        if(isSuccess){
            navigate('/');
        }
    }, [isSuccess])

    return(
        <>
            <Container className='addRec'>
                <h1 className="mt-3 mt-5">Recipe Sharing System</h1><br />
                <h2 className='mb-5'>Adding Recipes</h2>

            {
                errMsg ? <h2 className='text-danger'>{errMsg}</h2>
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
                            <Form.Group controlId="ing"
                            >
                                <Form.Label>Ingrediants : </Form.Label>
                                <Form.Control type="number" placeholder="Ex : 5" name="ing" value={formData.ing} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={12}>
                            <Form.Group controlId="ins" className='mt-5'>
                                <Form.Label>Instructions : </Form.Label>
                                <textarea className='form-control' rows="2" cols="5" type="text" placeholder="Enter Instructions" name="ins" value={formData.ins} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='my-5'>
                        <Col md={12}>
                            <Form.Group controlId="recsteps">
                                <Form.Label>Recipe Steps : </Form.Label>
                                <textarea className='form-control' rows="2" cols="5" type="text" placeholder="Enter Recipe Steps" name="recsteps" value={formData.recsteps} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="success" type="submit">Add Recipe</Button>
                </Form>
            }
            </Container>
        </>
    )
}
export default AddRecipe;