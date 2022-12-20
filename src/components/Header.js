import React from 'react'

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

    
    
return (
       
// import {Link} from 'react-scroll'
// import data from './header.data';


//const CTA = "Get Started"
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
                aria-label='Search database'
                icon={<SearchIcon />}
                />
                </HStack>
              </FormControl>
            
          
        </HStack>

		{/* // Call to action items */}
        <HStack>
        <Button colorScheme='blue' onClick={onOpen}>View Cart</Button>
    <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>YOUR CART</DrawerHeader>
        <DrawerBody>
          <p>Item 1...</p>
          <p>Item 2...</p>
          <p>Item 3...</p>
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