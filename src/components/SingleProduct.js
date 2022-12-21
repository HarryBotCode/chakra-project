import React from 'react'
import { Card,Flex, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, ButtonGroup, Button, Heading, Wrap , HStack} from '@chakra-ui/react'
import './styles.css';
import {CartState} from '../context/Context';

const SingleProduct = ({prod}) => {

  const {
    state: {cart},
    dispatch,
  } = CartState();


  return (
    <div className='product'>
      <HStack>
        <Card maxW='280' >
    <CardBody>
    <Image
    src={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
      alt={prod.name}
    
    />
    <Stack mt='6' spacing='1'>
      <Heading size='sm'>{prod.name}</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
        {prod.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button onClick={() => {
        dispatch({
          type:'ADD_TO_CART',
          payload:prod,
        })
      }}
        variant='solid' colorScheme='blue'>
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
      
    
  )
}

export default SingleProduct