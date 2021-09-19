export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  const totalPrice = basket?.reduce( (amount, item) => amount + item.price, 0 );

  return totalPrice;
}

const reducer = (state, action) => {
  if (action.type === 'ADD_TO_BASKET') {
    return {
      ...state, 
      basket: [...state.basket, action.item],
    }
  }

  if (action.type === 'REMOVE_FROM_BASKET') {
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === action.id
    );
    let newBasket= [...state.basket];

    if (index >= 0) {
      newBasket.splice(index, 1)
    } else {
      console.warn(`Can't remove product (id: ${action.id} as its not in the basket.`)
    }

    return {
      ...state,
      basket: newBasket,
    }
  }

  if (action.type === 'EMPTY_BASKET') {
    return {
      ...state,
      basket: [],
    }
  }

  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.user,
    }
  }

  return state;
};

export default reducer;

