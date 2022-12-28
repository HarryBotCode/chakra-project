import React from 'react'

import products from '../context/products.json';
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
  import { CloseButton } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";


const Cart = ({ cart, onAdd, onRemove, products, product }) => {
 const {data} = products;
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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

            {cart.length !== 0 && <div>cart is empty</div>}
            {cart.map((item) => (
              <div key={item.id}>
                  
          <VStack >
            <HStack justifyContent='space-between' justify-content='space-around' mt='5' mb='5'>
              <Heading as='h6' size='xs'>Items</Heading>
              <Heading as='h6' size='xs'>Price</Heading>
              <Heading as='h6' size='xs' >Qty</Heading>
              <Heading as='h6' size='xs'>SubTotal</Heading>
            </HStack>

                <HStack justify-content='space-between'>
                  <Image src={item.imgUrl} boxSize='50px' alt='image' />
                  <Text>{item.name}</Text>
                  <Button colorScheme='teal' variant='ghost' >-</Button>
                  <Text>{item.price}</Text>
                  <Button colorScheme='teal' variant='ghost'>+</Button>
                  <Text>450</Text>
                </HStack>
                <HStack justifyContent='flex-end' mt='5'>
              <Heading as='h6' size='md'>SubTotal : Rs 1240</Heading>
            </HStack>
            <HStack mt='5' justifyContent='flex-end'>
              <Button colorScheme='blue' variant='outline'>Checkout</Button>
            </HStack>
          </VStack>

              </div>
            ))}
            


        </DrawerBody>
      </DrawerContent>
    </Drawer>


  </HStack>

  )
}

export default Cart
                  
                
                
                
                