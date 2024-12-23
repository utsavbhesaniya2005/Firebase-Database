// /* eslint-disable no-case-declarations */
// import generateUniqueId from "generate-unique-id";

const initialState = {
    recipes : [],
    recipe : null,
    isLoading : false,
    errMsg : null,
    isSuccess : false
}

const RecipeReducers = (state = initialState, action) => {

    
    switch(action.type){
        
        case 'ADD_RECIPE_DATA_SUC' :

            return { ...state, isSuccess : true, isLoading : false} 

        case 'ADD_RECIPE_DATA_REJ' :

            return { ...state, errMsg : action.payload, isLoading : false} 

        case 'FIND_RECIPE_SUC' : 

            return {
                ...state,
                recipe : action.payload,
                isLoading : false,
                errMsg : null
            }

        case 'FIND_RECIPE_REJ' : 

            return {
                ...state,
                isLoading : false,
                errMsg : action.payload
            }

        case 'UPDATE_RECIPE_SUC' :
            
            return{
                ...state,
                recipe : action.payload,
                isLoading : false
            }
            
        case 'UPDATE_RECIPE_REJ' :

            return{
                ...state,
                errMsg : action.payload,
                isLoading : false
            }
            
        case 'DELETE_RECIPE_REJ' :

            return{
                ...state,
                errMsg : action.payload,
                isLoading : false
            }

        case 'GET_RECIPES_DATA_SUC' :

            return{
                ...state,
                isLoading : false,
                recipes : action.payload
            }

        case 'GET_RECIPES_DATA_REJ' :

            return{
                ...state,
                isLoading : false,
                errMsg : action.payload
            }

        case 'LOADING' : 
            return{
                ...state,
                isLoading : true
            }

        default : 
            return state;

    }

}

export default RecipeReducers;