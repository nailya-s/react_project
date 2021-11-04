import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct, selectedProduct } from './../../redux/reducers/productReducers';
import { useSelector } from 'react-redux';


const ProductDetails = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const product = useSelector(state => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId && productId !== "") {
            loadData();
        }
    }, [productId]);

    const loadData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            dispatch(selectedProduct(response.data));
            console.log(response.data);
        } catch (e) {
            dispatch(selectedProduct(e.message));
        }
    };

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addProduct(product));
            setCartBtn("Remove from Cart");
        }
        else {
            dispatch(deleteProduct(product));
            setCartBtn("Add to Cart");
        }
    }

    return (
        <>
            <div className="container my-5 py-2">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={product.image} alt={product.title} style={{ height: "400px" }} />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p className="lead ">{product.description}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-primary">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
