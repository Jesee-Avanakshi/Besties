import { Button,Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,ModalBody,ModalCloseButton, useDisclosure, Flex, FormControl, FormLabel, Input, Textarea} from '@chakra-ui/react'
import React from 'react'

function EditModal({user}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
    <>
        <Button onClick={onOpen}> Edit </Button>

<Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        <ModalHeader>
            Modify Friend
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <FormControl>
                    <FormLabel> Name </FormLabel>
                    <Input placeholder='Full Name'></Input>
                </FormControl>
                <FormControl>
                    <FormLabel> Role </FormLabel>
                    <Input placeholder='Software Engineer'></Input>
                </FormControl>

            </Flex>
            <Flex>
            <FormControl mt={4}>
                    <FormLabel> Description </FormLabel>
                    <Textarea placeholder='Write something about them'></Textarea>
            
            </FormControl>

            </Flex>


        </ModalBody>
        <ModalFooter alignItems justifyContent={'space-between'}>
            <Button colorScheme='blue'>Update</Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
    </ModalContent>

</Modal>
    </>
  )
}

export default EditModal