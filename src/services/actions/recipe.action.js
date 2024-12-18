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

        // dispatch(loading())
        
        // setTimeout(() => {
        //     api.get('/books').then(res => {
    
        //         dispatch(getBooksDataSuc(res.data))
                
        //     }).catch(err => {
             
        //         dispatch(getBooksDataRej(err.message))
        //     })
        // }, 2000)

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
        
        // setTimeout(() => {
        //     api.post('/books', data).then(res => {
       
        //         dispatch(AddRecipeDataSuc(res.data))     
        //     }).catch(err => {
            
        //         dispatch(AddRecipeDataRej(err.message))
        //     })
        // }, 2000)

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

        // setTimeout(() => {
        //     api.get(`/books/${id}`).then((res) => {

        //         dispatch(findBookSuc(res.data))
        //     }).catch((err) => {
    
        //         dispatch(findBookRej(err.message))
        //     })
        // }, 2000)
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

        // setTimeout(() => {
        //     api.put(`/books/${data.id}`,data).then((res) => {
      
        //         dispatch(updateBookSuc(res.data))
        //     }).catch((err) => {
    
        //         dispatch(updateBookRej(err.message))
        //     })
        // }, 2000)
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

        // api.delete(`/books/${id}`).then(() => {
        
        //     dispatch(getBooksAsync());
        // }).catch((err) => {

        //     dispatch(deleteBookTRej(err.message))
        // })
        try{
            
            await deleteDoc(doc(db, "recipes", `${id}`));
            dispatch(getRecipesAsync());
        }catch(err){
            console.log(err);
            
        }
    }
}