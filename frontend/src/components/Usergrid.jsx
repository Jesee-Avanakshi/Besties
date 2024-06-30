import React from 'react'
import { Flex, Grid, Spinner,Text } from '@chakra-ui/react'
import {USERS} from '../Dummy/dummy'
import UserCard from './UserCard'
import { useEffect,useState } from 'react'
import { BASE_URL } from '../App'

const Usergrid = ({users,setUsers}) =>{

  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    const getUsers =async()=>{
      try {
        const response = await fetch(BASE_URL + "/friends");
        const data = await response.json();
        
        if(!response.ok){
          throw newError(data.error);
        }
        setUsers(data);

      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }
    getUsers();
  },[setUsers]);
  return (
  <>
<Grid templateColumns={{base:"1fr",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}}>
  {
    
    users.map((user)=>{
        
        return <UserCard key={user.id} user={user} setUsers={setUsers}/>
    })
  }
</Grid>

    {isLoading&& (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"}/>
      </Flex>
    )}

    {!isLoading && users.length === 0 && (
            <Flex justifyContent={"center"}>
              <Text fontSize={"xl"}>
                <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
                  Poor you! 🥺
                </Text>
                No friends found.
              </Text>
            </Flex>
          )}
</>
  )
}

export default Usergrid