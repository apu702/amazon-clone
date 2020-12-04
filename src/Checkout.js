import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://www.earticleblog.com/wp-content/uploads/2017/08/gp-amazon-sale-banner-29062017.jpg" alt=""/>
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id= {item.id}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            rating= {item.rating}
                        ></CheckoutProduct>
                    ))}
                   


                </div>
            </div>

            <div className="checkout_right">
                <Subtotal></Subtotal>

            </div>
        </div>
    );
};

export default Checkout;