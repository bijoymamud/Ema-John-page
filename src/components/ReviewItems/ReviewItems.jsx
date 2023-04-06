import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./ReviewItems.css";

const ReviewItems = ({ product, handleRemoveFromCart }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div>

            <div className='review-item'>

                <img src={img} alt="" />

                <div className='review-details'>
                    <p className='product-title'>{name}</p>
                    <p>Price: <span className='orange-text'> ${price}</span></p>
                    <p>Order Quantity: <span className='orange-text'> {quantity}</span></p>

                </div>
                <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItems;