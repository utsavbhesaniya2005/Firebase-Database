// /* eslint-disable no-case-declarations */
// import generateUniqueId from "generate-unique-id";

const initialState = {
    books : [],
    book : null,
    isLoading : false,
    errMsg : null,
    isSuccess : false
}

const BookReducers = (state = initialState, action) => {

    
    switch(action.type){
        
        case 'ADD_BOOK_DATA_SUC' :

            return { ...state, isSuccess : true, isLoading : false} 

        case 'ADD_BOOK_DATA_REJ' :

            return { ...state, errMsg : action.payload, isLoading : false} 

        case 'FIND_BOOK_SUC' : 

            return {
                ...state,
                book : action.payload,
                isLoading : false,
                errMsg : null
            }

        case 'FIND_BOOK_REJ' : 

            return {
                ...state,
                isLoading : false,
                errMsg : action.payload
            }

        case 'UPDATE_BOOK_SUC' :
            
            console.log("dfvc",initialState.books);
            return{
                ...state,
                book : null,
                isLoading : false
            }
            
        case 'UPDATE_BOOK_REJ' :

            return{
                ...state,
                errMsg : action.payload,
                isLoading : false
            }
            
        case 'DELETE_BOOK_REJ' :

            return{
                ...state,
                errMsg : action.payload,
                isLoading : false
            }

        case 'GET_BOOKS_DATA_SUC' :

            return{
                ...state,
                isLoading : false,
                books : action.payload
            }

        case 'GET_BOOKS_DATA_REJ' :

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

export default BookReducers;