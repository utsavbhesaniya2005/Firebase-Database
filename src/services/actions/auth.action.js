import { createUserWithEmailAndPassword } from "firebase/auth"
import { loading } from "./recipe.action"
import { auth } from "../../firebaseconfig";

export const userSignUpSuc = (users) => {

    return{
        type : 'SIGNUP_SUC',
        payload : users
    }

}

export const userSignUpRej = (errMsg) => {

    return{
        type : 'SIGNUP_REJ',
        payload : errMsg
    }

}

export const resetSignUpErr = () => {
    return{
        type : 'RESET_SIGNUP_ERR'
    }
}

export const signUpAsync = (users) => {

    return async dispatch => {

        dispatch(loading)

        createUserWithEmailAndPassword(auth, users.email, users.pass)
        .then((userCred) => {
            
            userCred.user.displayName = users.uname;

            dispatch(userSignUpSuc(userCred.user))
        })
        .catch((err) => {
            
            console.log(err.code);
            
            if(err.code == 'auth/email-already-in-use'){
                
                dispatch(userSignUpRej('User Already Exits.'));
            }
        })

    }

}