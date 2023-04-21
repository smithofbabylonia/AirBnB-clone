import {applyMiddleware, combineReducers, createStore} from 'redux'; //configureStore is the right one to use according
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { listingListReducer } from './reducers/listingReducers';
import { modalReducer } from './reducers/modalReducer';
import { userLoginReducer } from './reducers/userReducer';

const userInfoLS = JSON.parse(localStorage.getItem("userInfo"));
const reducer = combineReducers({listingList: listingListReducer, modal:modalReducer, userLogin: userLoginReducer});
const initialState = {userLogin : {userInfo: userInfoLS}};
const middleware = [thunk];

const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;