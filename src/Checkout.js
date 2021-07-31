import React from 'react';
import './Checkout.css';
import Add from './ad.jpg';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={Add} alt="ad" />
                <div>
                    <h2 className="checkout__title">Your shopping cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                    
                    {/*Cart Item*/}
                    {/*Cart Item*/}
                    {/*Cart Item*/}
                    {/*Cart Item*/}
                    {/*Cart Item*/}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
