const initialState = {
    users : null,
    isCreate : false,
    isSignUpErr : null,
    user : null,
    isSignIn : false
}

const AuthReducers = (state = initialState, action) => {

    switch(action.type){

        case 'SIGNUP_SUC' :
            
            return {
                ...state, 
                isCreate : true,
                users : action.payload
            }

        case 'SIGNUP_REJ' :

            return {
                ...state,
                isSignUpErr : action.payload
            }   

        case 'SIGNIN_SUC' :

        return {
            ...state, 
            isSignIn : true,
            user : action.payload
        }

        case 'RESET_SIGNUP_ERR' :

            return{
                ...state,
                isSignUpErr : null
            }

        default : 
            return state    

    }

}
export default AuthReducers;