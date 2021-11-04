import React from 'react'
import s from './Product.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Product = () => {
    const products = useSelector((state) => state.allProducts.products);

    return (
        <>
        {
        products.map(p =>
            <div className="card mb-4" key={p.id} style={{width:"18rem"}}>
                <img src={p.image} className="card-img-top" alt={p.title} style={{height:"18rem"}}/>
                <div className ="card-body d-flex flex-column">
                <h5 className ="card-title ">{p.title}</h5>
                <p className ="lead">${p.price}</p>
                <NavLink to={`/products/${p.id}`} className ="btn btn-outline-primary">BUY NOW</NavLink>
                </div>
            </div>
        )}
            
        </>
    )
}

export default Product
