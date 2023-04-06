import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import "./Order.css";

const Orders = () => {
    const savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
    }

    return (
        <div className='shop-container'>

            <div className='review-container'>
                <h2 className='order-title'>Products Placed for Order : </h2>
                {
                    cart.map(product => <ReviewItems

                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}

                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Orders;
