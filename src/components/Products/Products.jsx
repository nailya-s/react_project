import React from 'react';
import { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../redux/reducers/productReducers';

const Products = () => {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            dispatch(setProducts(response.data));
            console.log(response.data);
        } catch (e) {
            dispatch(setProducts(e.message));
        }
    };
    



    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-between">
                <Product />
                </div>
            </div>
            
        </div>
    )
}

export default Products
