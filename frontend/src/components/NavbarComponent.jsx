import { Container, Flex,Box,Text, Button,useColorMode,useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import CreateUsermodal from './CreateUsermodal'

function NavbarComponent({setUsers}) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxWidth={"900px"}>
      <Box px={4} my={5} borderRadius={5} bg={useColorModeValue('black','gray.700')}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}  p={4}>
          {/* leftside */}
          <Flex alignItems={"center"} justifyContent={"space-between"} gap={3} display={{base:"none",sm:"flex"}}>
            <img src='/react.png' alt='react logo' width={50} height={50}/>
            <Text fontSize={"45px"} color ={useColorModeValue('white')}>+</Text>
            <img src='/python.png' alt='python logo' width={50} height={50}/>
          </Flex>
          {/* #right side */}
          <Flex  gap={3} alignItems={"center"}>
            <Text fontFamily={"bold"} fontSize={"xl"} display={{base:"none", md:"block" }} color={useColorModeValue('white')}> 
            Friendship
            </Text>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
            <CreateUsermodal setUsers={setUsers}/>
          </Flex>

        </Flex>
      </Box>
    </Container>

  )
}

export default NavbarComponent