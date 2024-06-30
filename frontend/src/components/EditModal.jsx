import { Button,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Flex, FormControl, FormLabel, Input, Textarea, useToast} from '@chakra-ui/react'
import {React,useState} from 'react'
import { BASE_URL } from '../App';

function EditModal({user,setUsers}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [inputs,setInputs] = useState({
        name : user.name,
        role :user.role,
        description:user.description,
    })
    
    const toast =useToast();
    const handleUpdateUser =async(e)=>{
        e.preventDefault();
		setIsLoading(true);
        try {
            const response = await fetch(BASE_URL + '/friends/'+ user.id ,{
                method : "PUT",
                headers :{
                    "Content-Type" : "application/json",
                },
                body : JSON.stringify(inputs),
                
            });
            const data = await response.json()

            if (!response.ok){
                throw new Error(data.error)
            }
            setUsers((prevUsers)=> prevUsers.map((u) => (u.id ===user.id ?data :u)));
            toast({
                title: 'Hurray',
                description: " Friend updated!!!",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position:"top-center",
              });
              onClose();
        } catch (error) {
            toast({
                title: 'Error',
                description: error.message,
                status: 'error',
                duration: 4000,
                position:"top-center",
              });

        }finally{
            setIsLoading(false);
        }
    }

    return (
    <>
    {console.log(user)}
        <Button onClick={onOpen}> Edit </Button>

<Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <form onSubmit={handleUpdateUser}>
    <ModalContent>
        <ModalHeader>
            Modify Friend
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={3} justifyContent={"space-between"}>
                <FormControl>
                    <FormLabel> Name </FormLabel>
                    <Input placeholder='Full Name'
                    value={inputs.name} onChange={(e)=>setInputs((prev) => ({...prev,name:e.target.value}))}></Input>
                </FormControl>

                <FormControl>
                    <FormLabel> Role </FormLabel>
                    <Input placeholder='Software Engineer'
                    value = {inputs.role} onChange={(e)=>setInputs((prev)=>({...prev,role:e.target.value}))}></Input>
                </FormControl>

            </Flex>
            <Flex>
            <FormControl mt={4}>
                    <FormLabel> Description </FormLabel>
                    <Textarea placeholder='Write something about them'
                    value = {inputs.description} onChange={(e)=>setInputs((prev)=>({...prev,description:e.target.value}))}></Textarea>
            
            </FormControl>

            </Flex>


        </ModalBody>
        <ModalFooter alignItems justifyContent={'space-between'}>
            <Button colorScheme='blue' type='submit'>Update</Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
    </ModalContent>
    </form>
</Modal>
    </>
  )
}

export default EditModal