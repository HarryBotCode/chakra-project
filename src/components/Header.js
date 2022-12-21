import React from 'react'
import { CloseButton } from '@chakra-ui/react'
import { BsFillCartFill } from "react-icons/bs";
import {CartState} from '../context/Context';
import {
    Image, 
    Flex, 
    Button,  
    HStack , 
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



   
const Header = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {state : {cart}} = CartState();
    
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
                <Input type='search' bgColor='white' placeholder='Search'/>
                <IconButton
                colorScheme='blue'
                type='text'
                icon={<SearchIcon />}
                />
                </HStack>
              </FormControl>
            
          
        </HStack>

		{/* view car */}
        <HStack>
        <Button rightIcon={<BsFillCartFill/>} colorScheme='blue' onClick={onOpen}>{cart.length}</Button>
    <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        
        <DrawerHeader borderBottomWidth='1px' >
        <HStack spacing='150px'>
          <Box>YOUR CART</Box>
          <Box><CloseButton onClick={onClose}/></Box>
          </HStack>
        </DrawerHeader>
        
        <DrawerBody>
          <p>Your Cart is empty</p>
          <p></p>
          <p></p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
         
          
        </HStack>
        
      </Flex>
    </chakra.header>
    
    </>
    
  );
  
}




export default Header;