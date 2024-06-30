import { useToast,Button,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Flex, FormControl, FormLabel, Input, Textarea, RadioGroup, Radio} from '@chakra-ui/react'
import {React ,useState} from 'react'

import { BASE_URL } from '../App'

const CreateUsermodal= ({setUsers})=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading,setIsLoading] = useState(false)
    const [inputs,setInputs] =useState({
        "name" : "",
        "role" :"",
        "description":"",
        "gender": "",
    });
    const toast = useToast()
    const handleCreateUser =async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        try{
            const response = await fetch(BASE_URL + "/friends",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
            },
            body: JSON.stringify(inputs),

            });

            const data = await response.json();

            if (!response.ok){
                throw new Error(data.error);
            }
            toast({
                    title: 'Hurray',
                    description: "New Friend created!!!",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position:"top-center",
                  });
            onClose();
            setUsers((prevUsers)=>[...prevUsers,data]);
            setInputs({"name" : "",
            "role" :"",
            "description":"",
            "gender": "",})
            
        }catch(error){
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
    <Button onClick={onOpen}> New + </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleCreateUser}>
        <ModalContent>
            <ModalHeader>
                Add New Friend
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Flex alignItems={"center"} gap={4} justifyContent={"space-between"}>
                    <FormControl>
                        <FormLabel> Name </FormLabel>
                        <Input placeholder='Full Name'
                        value={inputs.name} onChange={(e)=> setInputs({...inputs,name : e.target.value})}></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel> Role </FormLabel>
                        <Input placeholder='Software Engineer'
                        value={inputs.role} onChange={(e)=> setInputs({...inputs,role : e.target.value})}></Input>
                    </FormControl>

                </Flex>
                <Flex>
                <FormControl mt={4}>
                        <FormLabel> Description </FormLabel>
                        <Textarea placeholder='Write something about them'
                        value={inputs.description} onChange={(e)=> setInputs({...inputs,description : e.target.value})}></Textarea>
                
                </FormControl>

                </Flex>
                <RadioGroup defaultValue='Male' mt={4}>
                    <Flex gap={5}>
                        <Radio value='male' onChange={(e)=> setInputs({...inputs,gender : e.target.value})}>Male</Radio>
                        <Radio value='female' onChange={(e)=> setInputs({...inputs,gender : e.target.value})}>Female</Radio>
                    </Flex>

                </RadioGroup>


            </ModalBody>
            <ModalFooter justifyContent={'space-between'} >
                
                    <Button colorScheme='blue' type='submit'>Add</Button>
                    <Button onClick={onClose}>Cancel</Button>
               
            </ModalFooter>
        </ModalContent>
        </form>
    </Modal>
    </>
    
  )
}

export default CreateUsermodal