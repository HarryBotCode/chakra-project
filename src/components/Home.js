
import { useState } from 'react';

import { 
  
  Flex,
  Button,
  HStack, 
  chakra, 
  Box, 
  FormControl, 
  Input,
  VStack, 
  IconButton, 
  Heading, 
  Drawer, 
  DrawerBody, DrawerHeader, 
  DrawerOverlay, 
  DrawerContent,Card, Text, Image,   CardBody, CardFooter, Stack, Divider, ButtonGroup,useDisclosure } from '@chakra-ui/react'
import './styles.css';
import products from '../context/products.json';
import React from 'react'
import { CloseButton } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";

import {
  SearchIcon
} from '@chakra-ui/icons';

import Checkout from './Checkout';


const Home = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [SearchItem, setSearchItem] = useState("");
 
  
  const [cart, setCart] = useState([])
  // const subtTotal = cart.length * item.price;
  
  const itemsPrice = cart.reduce((a,c) => a + c.qty * c.price , 0);
  
  
  function handleClick (product)  {
    //Update cart item quantity if already in cart
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      const newCart = cart.map((x) => 
      
      x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
      );
      setCart(newCart);
    } else{
      const newCart = [...cart, { ...product, qty: 1 }];
      setCart(newCart);
    }
 
  };

  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCart = cart.filter((x) => x.id !== product.id);
      setCart(newCart);
    }else {
      const newCart = cart.map((x) =>
      x.id === product.id ? { ...exist, qty: exist.qty - 1} : x);
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
                
              </HStack>
            </FormControl>


          </HStack>

          {/* view cart */}
          
          <HStack>
    <Button rightIcon={<BsFillCartFill />} colorScheme='blue' onClick={onOpen}>{cart.length}</Button>
    <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='sm'>
      <DrawerOverlay />
      <DrawerContent>

        <DrawerHeader borderBottomWidth='1px' >
          <HStack spacing='200px'>
            <Box>SHOPPING CART</Box>
            <Box><CloseButton onClick={onClose} /></Box>
          </HStack>
        </DrawerHeader>

        <DrawerBody>

            {cart.length === 0 && <div>Your cart is empty</div>}
            {cart.length !== 0 && <div><HStack justifyContent='space-between' justify-content='space-around' mt='5' mb='5'>
              <Heading as='h6' size='xs'>Items</Heading>
              <Heading as='h6' size='xs'>Name</Heading>
              <Heading as='h6' size='xs'>Quantity</Heading>
              <Heading as='h6' size='xs'>Price</Heading>
            </HStack>  </div>}
            {cart.map((item) => (
              <div key={item.id} item={item}>
                 
          <VStack >
           

                <HStack spacing='50px' justifyContent='flex-start' >
                  <Image  src={item.imgUrl} boxSize='75px' alt='image' />
                  <Text width='60px'>{item.name}</Text>
                 <HStack width='75px' spacing={0}>
                 <Button colorScheme='teal' variant='ghost' onClick={() => onRemove(item)}>-</Button>
                  <Text>{item.qty}</Text>
                  <Button colorScheme='teal' variant='ghost' onClick={() => handleClick(item)}>+</Button>
                 </HStack>
                  <Text width='26px'>{itemsPrice}</Text>
                </HStack>
                
          </VStack>
          <Divider />
          <br/>
          

              </div>
            ))}
            {cart.length !== 0 && <div><HStack justifyContent='flex-end' mt='5'>
              <Heading as='h6' size='md'>SubTotal : Rs {itemsPrice} </Heading>
            </HStack>
            <HStack mt='5' justifyContent='flex-end'>
              <Button colorScheme='blue' variant='solid' onClick={<Checkout />}>Checkout</Button>
            </HStack></div>}
            
            


        </DrawerBody>
      </DrawerContent>
    </Drawer>


  </HStack>


        </Flex>
      </chakra.header>
      <div className='productContainer'>
        {products.filter((data) => {
          if (SearchItem === "") {
            return data
          } else if (data.name.toLowerCase().includes(SearchItem.toLowerCase())) {
            return data
          }
        }).map((product, i) => (
          <div key={product.id} data={product} className='product'>
          <HStack>
            <Card maxW='280' >
        <CardBody>
          
          <Image
          
          src={product.imgUrl}
          alt={product.name}
        
        />
        
       
        <Stack mt='6' spacing='1'>
          <Heading size='sm'>{product.name}</Heading>
          
          <Text color='blue.600' fontSize='2xl'>
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button 
            variant='solid' colorScheme='blue'
            onClick={() => handleClick(product)}
           >
              
            Add to cart
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            In Stock
          </Button>
        </ButtonGroup>
      </CardFooter>
     </Card>
    </HStack>
        </div> 
        ))}
      </div>
    </>

  )
}

export default Home