import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
               renderText={(value) => (
                   <>
                     <p>
                         Subtotal ({basket.length}): <strong>{value}</strong>
                     </p>
                     <small className="subtotal_gift">
                         <input type="checkbox"/> This Order Contains Gift
                     </small>
                   </>
               )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandsSeparator={true}
               prefix={"$"}
            ></CurrencyFormat>
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;