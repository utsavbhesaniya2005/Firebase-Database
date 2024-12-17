// middleware is used to manages between component and reducer and it is also called as manangement where we cam manage something between our anything action.
// thunk is react-middleware and it is used to give logisc in a actions without it we cannot give logics in action. 

import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./services/reducers";
import { thunk } from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
      ));

export default store