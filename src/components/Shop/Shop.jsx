import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    // for showing how many product I selected (order summary)
    const [cart, setCarts] = useState([]);

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);


    //for loading data from outsite in DB

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];

        //step-1 : get id from localStorage
        for (const id in storedCart) {

            // step: 2 : get the product buy using id
            const addedProduct = products.find(product => product.id === id);


            if (addedProduct) {
                // step 3: get the quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4: add the added Product to the saveCart
                saveCart.push(addedProduct);


            }
            // console.log('added Product', addedProduct);
        }

        //step 5: set the cart
        setCarts(saveCart);

    }, [products])


    //adding event handler for showing product in the summary div

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCarts(newCart);

        addToDb(product.id)
    }



    return (
        <div className='shop-container'>

            <div className='products-container'>

                {
                    products.map(product => <Product

                        key={product.id}
                        product={product}

                        handleAddToCart={handleAddToCart}

                    ></Product>)
                }

            </div>

            <div className='cart-container'>
                <div className='summary-section'>

                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div >
    );
};

export default Shop;

