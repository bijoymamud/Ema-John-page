import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleClearCart, children }) => {

    // const cart = props.cart;

    // const { cart } = props;
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {

        //! normal solution for quantity * 0

        // if (product.quantity === 0) {
        //     product.quantity = 1;

        // }

        //!option : 2

        product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (

        <div>
            <div className='cart'>
                <h3>Order Summary</h3>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice} </p>
                <p>Shipping Cost: ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>



            </div >
            <div className='btn'>
                <button onClick={handleClearCart} className='btn-clear-cart'>
                    <span > Clear Cart</span>
                    
                </button>

                {children}
            </div>
        </div>


    );
};

export default Cart;