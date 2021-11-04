import { createStore } from "redux";
import {combineReducers } from 'redux';
import { addProductReducer, productReducer, selectedProductReducer } from './reducers/productReducers';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    items: addProductReducer,
});

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;