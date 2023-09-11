import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProducersReducer, getProductDetailsReducer } from './reducers/productReducer';
import { getProductDetails } from './actions/productActions';

const reducer = combineReducers({
    getProducts: getProducersReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];
const store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
