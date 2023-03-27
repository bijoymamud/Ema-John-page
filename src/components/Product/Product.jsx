import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';


const Product = (props) => {

    console.log(props);

    const { img, name, seller, ratings, price } = props.product;



    //adding event handler for showing product in the summary div

    const handleAddToCart = props.handleAddToCart;




    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <div className='seller-ratting-info'>
                    <p className='manufacture-name'>Manufactirer: {seller}</p>
                    <p>Rating: {ratings} star</p>
                </div>

            </div>

            <button onClick={() => handleAddToCart(props.product)} className='btn-cart' >
                Add to Cart
                <FontAwesomeIcon className='icone' icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;