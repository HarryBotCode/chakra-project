import React from 'react'
import {CartState} from '../context/Context';
import SingleProduct from './SingleProduct';



const Home = () => {
  
   const { 
     state : { products },
   } = 
  CartState();
  
  
  
  return (
    <div className='productContainer'>
      {products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id}/>
      })}

    </div>
  )
}

export default Home