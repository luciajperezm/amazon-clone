import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log('thisnlsndf', basket);
    const addToBasket = () => {
        //dispatch item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <img className="product__image" src={image} alt="vc"/>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    $  
                    <strong className="product__priceNumber">{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}                  
                </div>
            </div>
            <button onClick={addToBasket} className="btn" >Add to Cart</button>
        </div>
    )
}

export default Product;

