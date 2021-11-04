import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
    const state = useSelector((state)=> state.items.items);
    
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary">
                <span className="fa fa-shopping-basket me-1" ></span> Cart ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn
