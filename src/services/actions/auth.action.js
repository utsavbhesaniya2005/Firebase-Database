import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { loading } from "./recipe.action"
import { auth, provider } from "../../firebaseconfig";
import { data } from "react-router";

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

export const userSignInSuc = (user) => {

    return{
        type : 'SIGNIN_SUC',
        payload : user
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

export const signInAsync = (user) => {

    return async dispatch => {

        dispatch(loading())

        signInWithEmailAndPassword(auth, user.email, user.pass)
        .then((res) => {

            console.log(res);
            dispatch(userSignInSuc(res.user))
        })
        .catch((err) => {

            console.log(err);
        })
    }

}

export const signInWithGoogle = () => {

    return async dispatch => {
        
        dispatch(loading())

        signInWithPopup(auth, provider)
        .then((res) => {

            console.log(res.user);
            dispatch(userSignInSuc(res.user));
            
        })
        .catch((err) => {
            
            console.log(err);
        })
    }
}