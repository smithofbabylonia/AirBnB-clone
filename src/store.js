import {applyMiddleware, combineReducers, createStore} from 'redux'; //configureStore is the right one to use according
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { listingListReducer } from './reducers/listingReducers';
import { modalReducer } from './reducers/modalReducer';

const reducer = combineReducers({listingList: listingListReducer, modal:modalReducer});
const initialState = {};
const middleware = [thunk];

const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;