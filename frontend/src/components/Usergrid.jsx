import React from 'react'
import { Grid, } from '@chakra-ui/react'
import {USERS} from '../Dummy/dummy'
import UserCard from './UserCard'

function Usergrid() {
  return (
  
<Grid templateColumns={{base:"1fr",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}}>
  {
    
    USERS.map((user)=>{
        console.log(user)
        return <UserCard key={user.id} user={user}/>
    })
  }
</Grid>

  )
}

export default Usergrid