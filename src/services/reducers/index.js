import { combineReducers } from "redux";
import RecipeReducers from "./RecipeReducers";
import AuthReducers from "./AuthReducers";

const rootReducer = combineReducers({
    RecipeReducers,
    AuthReducers
})

export default rootReducer;