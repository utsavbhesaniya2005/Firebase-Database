import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore"
import { db } from "../../firebaseconfig"

export const AddRecipeDataSuc = (data) => {
    return{
        type : "ADD_RECIPE_DATA_SUC",
        payload : data
    }
}

export const AddRecipeDataRej = (errmsg) => {
    return{
        type : "ADD_RECIPE_DATA_REJ",
        payload : errmsg
    }
}

export const findRecipeSuc = (data) => {
    return{
        type : "FIND_RECIPE_SUC",
        payload : data
    }
}

export const findRecipeRej = (msg) => {
    return{
        type : "FIND_RECIPE_REJ",
        payload : msg
    }
}

export const updateRecipeSuc = (data) => {
    return{
        type : "UPDATE_RECIPE_SUC",
        payload : data
    }
}

export const updateRecipeRej = (msg) => {
    return{
        type : "UPDATE_RECIPE_REJ",
        payload : msg
    }
}

export const deleteRecipeRej = (msg) => {
    return{
        type : "DELETE_RECIPE_REJ",
        payload : msg
    }
}

export const getRecipesDataSuc = (data) => {
    return{
        type : "GET_RECIPES_DATA_SUC",
        payload : data
    }
}

export const getRecipesDataRej = (errMsg) => {
    return{
        type : "GET_RECIPES_DATA_REJ",
        payload : errMsg
    }
}

export const loading = () => {
    return{
        type : "LOADING"
    }
}

export const getRecipesAsync = () => {
    return async dispatch => {

        dispatch(loading())

        try{
            
            let rec = await getDocs(collection(db, "recipes"));
            
            let recs = [];

            rec.forEach((record) => {
                let allRecs = record.data();
                allRecs.id = record.id;
                recs.push(allRecs)
            })

            dispatch(getRecipesDataSuc(recs))
            
        }catch(err){
            console.log(err);
        }
    }
}

export const AddRecipesAsync = (data) => {
    return async dispatch => {

        dispatch(loading())

        // let recs = await setDoc(doc(db, "camels", "1"), data);

        try{

            await addDoc(collection(db, "recipes"), data);

        }catch(err){
            
            console.log("ERR",err);
        }
        
    }
}

export const findRecipesAsync = (id) => {

    return async dispatch => {

        dispatch(loading())

        try{

            let findRec = await getDoc(doc(db, "recipes", `${id}`));

            let getData = findRec.data();
            getData.id = findRec.id;

            dispatch(findRecipeSuc(getData))
        }catch(err){
            
            console.log(err);
        }
        
    }
}   

export const updateRecipeAsync = (data) => {

    return async dispatch => {
        dispatch(loading())

        try{

            let updateRec = await setDoc(doc(db, "recipes", `${data.id}`), data);
            dispatch(updateRecipeSuc(updateRec))

        }catch(err){

            console.log(err);
        }
    }

}

export const deleteRecipeAsync = (id) => {
    return async dispatch => {
        dispatch(loading())

        try{
            
            await deleteDoc(doc(db, "recipes", `${id}`));
            dispatch(getRecipesAsync());
        }catch(err){
            
            console.log(err);
        }
    }
}