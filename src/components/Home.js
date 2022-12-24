
import { useState } from 'react';
import SingleProduct from './SingleProduct';

import products from '../context/products.json';

import React from 'react'
import { CloseButton } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";
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

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [SearchItem, setSearchItem] = useState("");

  const [CartItems, setCartItems] = useState([])

  const addToCart = (data) => {
    setCartItems([...CartItems, data]);

  }


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

          <HStack>
            <Button rightIcon={<BsFillCartFill />} colorScheme='blue' onClick={onOpen}>4</Button>
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>

                <DrawerHeader borderBottomWidth='1px' >
                  <HStack spacing='150px'>
                    <Box>SHOPPING CART</Box>
                    <Box><CloseButton onClick={onClose} /></Box>
                  </HStack>
                </DrawerHeader>

                <DrawerBody>

                  <VStack >
                    <HStack justifyContent='space-between' justify-content='space-around' mt='5' mb='5'>
                      <Heading as='h6' size='xs'>Items</Heading>
                      <Heading as='h6' size='xs'>Price</Heading>
                      <Heading as='h6' size='xs' >Qty</Heading>
                      <Heading as='h6' size='xs'>SubTotal</Heading>
                    </HStack>
                    {CartItems.length == 0 && <div>cart is empty</div>}
                    {products.map((item) => (
                      <div key={item.id} item={item}>


                        <HStack justify-content='space-between'>
                          <Image src={item.imgUrl} boxSize='50px' alt='image' />
                          <Text>{item.name}</Text>
                          <Button colorScheme='teal' variant='ghost'>-</Button>
                          <Text>{item.price}</Text>
                          <Button colorScheme='teal' variant='ghost'>+</Button>
                          <Text>450</Text>
                        </HStack>

                      </div>
                    ))}
                    <HStack justifyContent='flex-end' mt='5'>
                      <Heading as='h6' size='md'>SubTotal : Rs 1240</Heading>
                    </HStack>
                    <HStack mt='5' justifyContent='flex-end'>
                      <Button colorScheme='blue' variant='outline'>Checkout</Button>
                    </HStack>
                  </VStack>



                </DrawerBody>
              </DrawerContent>
            </Drawer>


          </HStack>


        </Flex>
      </chakra.header>
      <div className='productContainer'>
        {products.filter((data) => {
          if (SearchItem == "") {
            return data
          } else if (data.name.toLowerCase().includes(SearchItem.toLowerCase())) {
            return data
          }
        }).map((prod, i) => (
          <SingleProduct key={i} data={prod} addToCart={addToCart} />
        ))}
      </div>
    </>

  )
}

export default Home