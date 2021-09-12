import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
// eslint-disable-next-line no-unused-vars
const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />

        <div>
          <h3>Hello, {user ? user.email.substring(0, user.email.indexOf('@')) : 'Guest'}</h3>
          <h2 className='checkout__title'>
            Your Shopping Basket
          </h2>

           {basket.map(item => (
             <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
             /> 
           ))}

            {/* <CheckoutProduct
              id='123124'
              title='test test test test test test test test test test test test '
              image='https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg' 
              price={234}
              rating={5}
             />
             <CheckoutProduct
              id='123124'
              title='test test test test test test test test test test test test '
              image='https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg' 
              price={234}
              rating={5}
             /> */}
          {/* basket item */}
          {/* basket item */}
          {/* basket item */}
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal ></Subtotal>
      </div>
    </div>
  )
}

export default Checkout
