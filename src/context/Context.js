import React, { useContext, useReducer } from 'react'
import {createContext} from 'react';
import { faker } from '@faker-js/faker';
import {cartReducer} from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id:faker.datatype.uuid(),
        name: faker.commerce.product(),
        image: faker.image.cats(),
        price: faker.finance.amount()
        
    }));
    const [state, dispatch] = useReducer(cartReducer,{
      products : products,
      cart:[],
    })
  
    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>;
    
  
};

export default Context

export const CartState = () => {
  return useContext(Cart);
}