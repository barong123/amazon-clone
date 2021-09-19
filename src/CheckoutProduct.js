import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({id, image, title, price, rating}) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    })
  }

  return (
    <FlipMove> 
      {/* basket.length serves as a unique identifier */}
    <div key={basket.length} className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
         {Array(rating)
          .fill(<p>⭐</p>)}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
    </FlipMove>
  )
}

export default CheckoutProduct
