import { Avatar, Button, Card, CardHeader,Flex, Heading, Text,Box, CardBody,useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import EditModal from './EditModal'


function UserCard({user}) {
  return (
  
    <Card bg={useColorModeValue('blue.100','gray.500')} m={"5"}>
        {console.log(user)}
        <CardHeader>
            <Flex gap={"4"}>
                <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png" />
                    <Box>
                        <Heading size='sm'>{user.name}</Heading>
                        <Text>{user.role}</Text>
                    </Box>   
                </Flex>
                <Flex  alignItems={"center"}>
                    <EditModal/>
                    <Button>D</Button>
                    
                </Flex>
            </Flex>
        </CardHeader>
        <CardBody>
            <Text>{user.description}</Text>
        </CardBody>
    </Card>
  )
}

export default UserCard