import React from 'react'
import { Card,Flex, Box, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, ButtonGroup, Button, Heading, Wrap , HStack} from '@chakra-ui/react'
import './styles.css';
import { useParams } from "react-router-dom";

const SingleProduct = ({data, ...rest}, {handleClick}) => {
  

  return (
    <>
    <div className='product'>
      <HStack>
        <Card maxW='280' >
    <CardBody>
      
      <Image
      
      src={data.imgUrl}
      alt={data.name}
    
    />
    
   
    <Stack mt='6' spacing='1'>
      <Heading size='sm'>{data.name}</Heading>
      
      <Text color='blue.600' fontSize='2xl'>
        {data.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button 
        variant='solid' colorScheme='blue'
        onClick={() => handleClick(data)}
      
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
    
   
      
    
    </>
      
    
  )
}

export default SingleProduct