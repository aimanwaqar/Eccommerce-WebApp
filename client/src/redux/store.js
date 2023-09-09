import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProducersReducer } from './reducers/productReducer';

const reducer = combineReducers({
    getProducts: getProducersReducer
});

const middleware = [thunk];
const store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))
)

export default store;