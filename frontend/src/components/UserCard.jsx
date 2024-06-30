import { Avatar, Button, Card, CardHeader,Flex, Heading, Text,Box, CardBody,useColorModeValue, filter, useToast} from '@chakra-ui/react'
import React from 'react'
import { BASE_URL } from '../App'
import EditModal from './EditModal'
import { MdDelete } from "react-icons/md";

function UserCard({user,setUsers}) {
  const toast =useToast()
  const handleDeleteUser =async ()=>{
        try {
            const response = await fetch(BASE_URL+'/friends/'+ user.id , {
                method : "DELETE",
            })
            const data = response.json()
            if (!response.ok){
                throw new Error(data.error)
            }
            setUsers((prevUsers)=> prevUsers.filter((u)=>u.id!=user.id));
            toast({
                title: 'Deletion',
                description: "Friend Deleted!!!",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position:"top-center",
              });
        } catch (error) {
            toast({
                title: 'Error',
                description: <error className="message"></error>,
                status: 'error',
                duration: 4000,
                position:"top-center",
              });
        }
  }
  return (
  
    <Card bg={useColorModeValue('blue.100','gray.500')} m={"5"}>
       
        <CardHeader>
            <Flex gap={"3"}>
                <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                    <Avatar src={user.imgUrl} />
                    <Box>
                        <Heading size='sm'>{user.name}</Heading>
                        <Text>{user.role}</Text>
                    </Box>   
                </Flex>
                <Flex  alignItems={"center"} gap={3}>
                    <EditModal user={user} setUsers={setUsers}/>
                    <Button onClick={handleDeleteUser}><MdDelete /></Button>
                    
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