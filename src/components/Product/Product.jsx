import React from 'react';
import './Product.css';

const Product = (props) => {

    console.log(props);

    const { img, name, seller, ratings, price } = props.product;

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

            <button className='btn-cart'>Add to Cart</button>

        </div>
    );
};

export default Product;