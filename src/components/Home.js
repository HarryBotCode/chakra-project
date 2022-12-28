
import { useState } from 'react';
import SingleProduct from './SingleProduct';

import products from '../context/products.json';

import React from 'react'

import Cart from './Cart';
import {
  Text,
  Image,
  Flex,
  Button,
  HStack, 
  chakra, 
  Box, 
  Link, 
  FormControl, 
  Input,
  VStack, 
  IconButton, 
  Heading, 
  Drawer, 
  DrawerBody, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  useDisclosure,


} from '@chakra-ui/react'

import {
  SearchIcon
} from '@chakra-ui/icons';



const Home = () => {

 

  const [SearchItem, setSearchItem] = useState("");
 
  const [cart, setCart] = useState([])
  

   function handleClick (product)  {
    // Update cart item quantity if already in cart
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      const newCart = cart.map((x) => 
      
      x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
      );
      setCart(newCart);
    } else{
      const newCart = [...cart, { ...product, qty:1}];
      setCart(newCart);
    }
  };
  const onRemove = (product) => {
    const exist = cart.findIndex((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCart = cart.filter((x) => x.id !== product.id);
      setCart(newCart);
    }
  };
   


  return (
    <>
      <chakra.header id="header">
        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="space-between"
          bgColor='blackAlpha.900'
        >
          <Heading color='white'>CART</Heading>
          {/* // Logo */}
          <Image src='' h="50px" />


          {/* {--Nav Items-}  */}
          <HStack as="nav" spacing="5">


            <FormControl variant="nav">
              <HStack>
                <Input type='search' bgColor='white' placeholder='Search' onChange={(e) => { setSearchItem(e.target.value) }} />
                <IconButton
                  colorScheme='blue'
                  type='text'
                  icon={<SearchIcon />}
                />
              </HStack>
            </FormControl>


          </HStack>

          {/* view cart */}
          <Cart
          
              cart={cart}
              setCart={setCart}
              onRemove={onRemove}
              products={products}
               
              
            />
          

        </Flex>
      </chakra.header>
      <div className='productContainer'>
        {products.filter((data) => {
          if (SearchItem == "") {
            return data
          } else if (data.name.toLowerCase().includes(SearchItem.toLowerCase())) {
            return data
          }
        }).map((product, i) => (
          <SingleProduct key={i} data={product} item={cart.find((x) => x.id === product.id)} handleClick={handleClick} />
        ))}
      </div>
    </>

  )
}

export default Home