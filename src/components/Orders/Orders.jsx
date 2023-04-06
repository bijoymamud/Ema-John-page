import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import "./Order.css";

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='shop-container'>

            <div className='review-container'>
                <h2 className='order-title'>Products Placed for Order : </h2>
                {
                    cart.map(product => <ReviewItems

                        key={product.id}
                        product={product}

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
