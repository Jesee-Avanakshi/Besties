import {Container, Stack ,Text } from '@chakra-ui/react'
import { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import Usergrid from './components/Usergrid'

export const BASE_URL = "http://127.0.0.1:5000/api"

function App() {
  const [users,setUsers] = useState([]);


  return (
    <Stack minH={"100vh"}>
      <NavbarComponent setUsers={setUsers}/>
      <Container maxW={"1200px"} my={4}>
      <Text fontSize={{ base: "3xl", md: "50" }}
					fontWeight={"bold"}
					letterSpacing={"2px"}
					textTransform={"uppercase"}
					textAlign={"center"}
					mb={8}> 
          <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
						My Besties
					</Text>
        </Text>
        <Usergrid  users={users} setUsers={setUsers}/>
      </Container>
    </Stack>
  )
}

export default App
